import React, { Component } from "react";
import Maintable from "../common/maintable";
import { getService, deleteWorshippers } from "../common/Worshippers";
import { toast } from "react-toastify";

class WorshipperTable extends Component {
  state = { worshippers: [] };
  async handleData() {
    const { data: worshippers } = await getService(this.props.match.params.id);
    this.setState({ worshippers });
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  handleDeleteWorshippers = async (worshipper) => {
    const originalWorshipper = this.state.worshippers;
    const worshippers = originalWorshipper.filter(
      (s) => s._id !== worshipper._id
    );
    this.setState({ worshippers });

    try {
      await deleteWorshippers(worshipper._id);
      toast.success("deleted");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This person has been already deleted");

      this.setState({ worshippers: originalWorshipper });
    }
  };
  handleBack = () => {
    this.props.history.push("/Dashboard");
  };
  render() {
    this.handleData();
    return (
      <div className="col-m">
        <Maintable
          items={this.state.worshippers}
          toDelete={this.handleDeleteWorshippers}
          goBack={this.handleBack}
        />
      </div>
    );
  }
}

export default WorshipperTable;
