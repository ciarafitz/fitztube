import React from "react";
import Link from "next/link";

export default class HomeButton extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <Link href="/">
          <button>FitzTube</button>
        </Link>
      </div>
    )
  }

}
