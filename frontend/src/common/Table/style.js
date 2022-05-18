import styled from "styled-components";

export const TableWrapper = styled.div`

table {
    width: 80%;
    margin:auto;
    border-spacing: 0;
    border: 1px solid white;
    tr {
        :last-child {
            td {
                border-bottom: 0;
            }
        }
    }
    
    th,
    
    td {
        margin:auto;
        padding: 0rem;
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        :last-child {
            border-right: 0;
        }
    }
    
}
`