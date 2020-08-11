import React from 'react';
import styled, { css } from "styled-components";


function createData(category, contents, cost, top='', bottom='', color='#fff',bold=false) {
  return { category, contents, cost, top, bottom, color, bold };
}

const rows = [
  createData('가맹비', '상호, 상표사용권, 브랜드 운영 노하우 전수', '500', '2px solid #fff',''),
  createData('교육비', '레시피제공, 이론 + 조리 + 현장교육비용', '300'),
  createData('인테리어', '실측 후 견적가', '직접시공가능'),
  createData('간판', '4m 기준 배달형', '직접시공가능'),
  createData('주방기기+집기', '냉장고, 찬냉장고, 화구, 등', '800'),
  createData('홍보물', '전단지, 종이자석, 리플릿, 온라인, 어플 홍보비, 기타', '150'),
  createData('합계','' ,'1,750', '2px solid #E50012', '2px solid #E50012','#E50012',true),
  createData('별도사항', '컴퓨터, 오토바이, 휴대용 카드 단말기, 초도물류 등', '', '', '2px solid #fff')
];


const TableContainer = styled.div`
    color: #fff; 
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #242424;

   margin-top: 10%;

   width: 100%;
   padding: 0 10%;
    overflow-x: auto;

    @media (max-width: 480px) { 
        margin-top: 20%;
   	padding: 0 5%;
    }
`;

const Table = styled.table`
    width: 100%;
    display: table;
    border-spacing: 0;
    border-collapse: collapse;
    color: #fff; 
`;

const TableHead = styled.thead`
    display: table-header-group;
`;
const TableBody = styled.tbody`
    display: table-row-group;
`;
const TableRow = styled.tr`
    color: inherit;
    display: table-row;
    outline: 0;
    vertical-align: middle;
`;

const TableH = styled.th`
    display: table-cell;
    padding: 16px;
    font-size: 1.2rem;
    text-align: left;
   
    line-height: 1.43;
    ${props => {
	if (props.top_color !== '') {
	    return css `border-top: ${props.top_color};`;
       }
    }}
    ${props => {
	if (props.bottom_color !== '') {
	    return css `border-bottom: ${props.bottom_color};`;
       }
    }}
    ${props => {
	if (props.font_color !== '') {
	    return css `color: ${props.font_color};`;
       }
    }}
    letter-spacing: 0.01071em;
    vertical-align: inherit;
    
    @media (max-width: 480px) { 
        padding: 10px;
        font-size: 1rem;

    }
`;

const TableData = styled.th`
    display: table-cell;
    padding: 16px;
   font-size: 1.2rem;
    text-align: left;
    
    line-height: 1.43;
    ${props => {
	if (props.top_color !== '') {
	    return css `border-top: ${props.top_color};`;
       }
    }}
    ${props => {
	if (props.bottom_color !== '') {
	    return css `border-bottom: ${props.bottom_color};`;
       }
    }}
    ${props => {
	if (props.font_color !== '') {
	    return css `color: ${props.font_color};`;
       }
    }}

    ${props => {
	if (props.bold) {
	    return css `font-weight: bold;`;
       }
    }}
    letter-spacing: 0.01071em;
    vertical-align: inherit;


    @media (max-width: 480px) { 
        padding: 10px;
        font-size: 1rem;
    }
`;

export default () => {
  return (
    <TableContainer>
      <Table aria-label="table">
        <TableHead>
            <TableRow>
            <TableH top_color='2px solid #fff'>구분</TableH>
            <TableData top_color='2px solid #fff'>내용</TableData>
            <TableData top_color='2px solid #fff'>10평 (Take out + 배달형)</TableData>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
              <TableRow key={index}>
              <TableH top_color={row.top} bottom_color={row.bottom} font_color={row.color}>
                {row.category}
              </TableH>
              <TableData top_color={row.top} bottom_color={row.bottom} font_color={row.color}>{row.contents}</TableData>
              <TableData top_color={row.top} bottom_color={row.bottom} font_color={row.color} bold={row.bold}>{row.cost}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/*
export default () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>구분</TableCell>
            <TableCell align="left">내용</TableCell>
            <TableCell align="left">10평 (100% 배달형)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.category}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">{row.contents}</TableCell>
              <TableCell align="left">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

*/
