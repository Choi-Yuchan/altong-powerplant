function Num3Comma(props){
    if(isNaN(parseInt(String(props),10)) === true) return props;
    const number = String(props);

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default Num3Comma;