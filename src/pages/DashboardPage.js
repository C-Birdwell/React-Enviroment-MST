import React, { Component } from "react";
import ItemForm from "../components/ItemForm";
import { observer, inject } from "mobx-react";

class DashboardPage extends Component {
  render() {
    const { invoice } = this.props;

    return <ItemForm invoice={invoice} />;
  }
}

export default inject("invoice")(observer(DashboardPage));
