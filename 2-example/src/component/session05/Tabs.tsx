import React, { useState } from "react";
import { BiCopy, BiArchive, BiLineChart, BiLaptop } from "react-icons/bi";

interface ITabs {}

function Tabs(props: ITabs) {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const style = {
    width: "70px",
    height: "70px",
  };

  return (
    <>
      <div className="container text-center">
        <div className="bt_tabs mt-5 mb-5 text-uppercase">Button tabs</div>
        <div className="row">
          <button
            className="col4 col "
            onClick={() => {
              setIndex(0);
            }}
          >
            History
          </button>
          <button
            className="col4 col "
            onClick={() => {
              setIndex(1);
            }}
          >
            History
          </button>
          <button
            className="col4 col "
            onClick={() => {
              setIndex(2);
            }}
          >
            History
          </button>
          <button
            className="col4 col "
            onClick={() => {
              setIndex(3);
            }}
          >
            History
          </button>
        </div>

        <div className="col_des" hidden={index != 0}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
        </div>
        <div className="col_des" hidden={index != 1}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </div>
        <div className="col_des" hidden={index != 2}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est.
        </div>
        <div className="col_des" hidden={index != 3}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </div>
      </div>

      <div className="container text-center">
        <div className="bt_tabs mt-5 mb-5 text-uppercase">Icons tabs</div>
        <div className="row bg-white mb-5">
          <div
            className="col2 col"
            onClick={() => {
              setIndex1(0);
            }}
          >
            <BiCopy style={style} />
            <br />
            <p> History</p>
          </div>
          <div
            className="col2 col"
            onClick={() => {
              setIndex1(1);
            }}
          >
            <BiArchive style={style} />
            <br />
            <p> Approach</p>
          </div>
          <div
            className="col2 col"
            onClick={() => {
              setIndex1(2);
            }}
          >
            <BiLineChart style={style} />
            <br />
            <p>Culture</p>
          </div>
          <div
            className="col2 col"
            onClick={() => {
              setIndex1(3);
            }}
          >
            <BiLaptop style={style} />
            <br />
            <p>Method</p>
          </div>
        </div>

        <div className="col2 col_des" hidden={index1 != 0}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
        </div>
        <div className="col2 col_des" hidden={index1 != 1}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </div>
        <div className="col2 col_des" hidden={index1 != 2}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est.
        </div>
        <div className="col2 col_des" hidden={index1 != 3}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </div>
      </div>

      <div className="container text-center">
        <div className="bt_tabs mt-5 mb-5 text-uppercase">Text tabs</div>
        <div className="row3 row bg-white mb-5 border-bottom">
          <div
            className="col3 col"
            onClick={() => {
              setIndex2(0);
            }}
          >
            History
          </div>
          <div
            className="col3 col"
            onClick={() => {
              setIndex2(1);
            }}
          >
            Approach
          </div>
          <div
            className="col3 col"
            onClick={() => {
              setIndex2(2);
            }}
          >
            Culture
          </div>
          <div
            className="col3 col"
            onClick={() => {
              setIndex2(3);
            }}
          >
            Method
          </div>
        </div>

        <div className="col_des" hidden={index2 != 0}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
        </div>
        <div className="col_des" hidden={index2 != 1}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </div>
        <div className="col_des" hidden={index2 != 2}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est.
        </div>
        <div className="col_des" hidden={index2 != 3}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </div>
      </div>

      <div className="container text-center">
        <div className="bt_tabs mt-5 mb-5 text-uppercase text-start">
          VERTICAL BUTTONS
        </div>
        <div className="row_2col">
          <div className="row_left">
            <div className="row4 row">
              <button
                className="col4 col "
                onClick={() => {
                  setIndex3(0);
                }}
              >
                History
              </button>
            </div>

            <div className="row4 row">
              <button
                className="col4 col "
                onClick={() => {
                  setIndex3(1);
                }}
              >
                Approach
              </button>
            </div>

            <div className="row4 row">
              <button
                className="col4 col "
                onClick={() => {
                  setIndex3(2);
                }}
              >
                Culture
              </button>
            </div>

            <div className="row4 row">
              <button
                className="col4 col "
                onClick={() => {
                  setIndex3(3);
                }}
              >
                METHOD
              </button>
            </div>
          </div>

          <div className="row_right">
            <div className="col_des4" hidden={index3 != 0}>
              <p className="des_title">LET'S TALK TABS</p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
            </div>

            <div className="col_des4" hidden={index3 != 1}>
              <p className="des_title">COOL TABS</p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores.
              </p>
            </div>

            <div className="col_des4" hidden={index3 != 2}>
              <p className="des_title">SHORTER TABS</p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est.
              </p>
            </div>

            <div className="col_des4" hidden={index3 != 3}>
              <p className="des_title">LONGER TABS</p>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur? At vero
                eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
