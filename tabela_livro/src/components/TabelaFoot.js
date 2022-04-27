import React from "react";

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4"><strong> {props.qtdLivros}</strong> registros encontrados! </td>
        </tr>
    </tfoot>
);

export default TabelaFoot;