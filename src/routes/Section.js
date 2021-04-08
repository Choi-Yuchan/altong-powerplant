import Box from '../components/sections/box/Box';
import More from '../components/sections/more/More';
import Title from '../components/sections/title/Title';





function Section () {

    const con = [
        {
            yellow:"100",
            big:"지구는 왜 둥글까요?",
            sub:"둥글면 얼마나 둥근가요?",
            hour:"3",
            look:"10",
            hun:"10"
        },
        {
            yellow:"200",
            big:"인구는 왜 둥글까요?",
            sub:"얼마나 안둥글면 얼마나 둥근가요?",
            hour:"30",
            look:"110",
            hun:"20"
        },
        {
            yellow:"300",
            big:"당구는 왜 둥글까요?",
            sub:"안둥글면 얼마나 둥근가요?",
            hour:"23",
            look:"30",
            hun:"0"
        },
        {
            yellow:"400",
            big:"축구는 왜 둥글까요?",
            sub:"둥글둥글면 얼마나 둥근가요?",
            hour:"13",
            look:"20",
            hun:"50"
        }
    ];

    const title = ["질문","답변"];

    return(
        <>
            <Title title = { title[0] }/>
            <Box con={ con[0] }/>
            <Box con={ con[1] }/>
            <More/>
            <Title title = { title[1] }/>
            <Box con={ con[2] }/>
            <Box con={ con[3] }/>
            <More/>
        </>
    );
};

export default Section;