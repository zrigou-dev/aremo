import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container-error">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">On dirait que tu es perdu.</h3>
 
                <p>La page que vous recherchez n'est pas disponible!</p>

                <Link to='/' className="link_404">
                Aller à la page d'accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
