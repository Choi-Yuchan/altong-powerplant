import ActivityGraph from '../components/activity/ActivityGraph';
import ActivityDivide from '../components/activity/ActivityDivide';
import ActivityContents from '../components/activity/ActivityContents';

const langActivityAlogPage = {
    ko:{
        revenue: [
            { 
                x: "퍼가기",
                y: 25,
                color: "#fc6d89"
            },
            { 
                x: "훈훈알", 
                y:48,
                color: "#fd0031"
            },
            { 
                x: "열람", 
                y:24,
                color: "#ff9aad" 
            },
            { 
                x: "기타",
                y:3,
                color: "#f6bec9"
            }
        ],
        expense: [
            { 
                x: "훈훈알",
                y: 25,
                color: "#98D0FB"
            },
            { 
                x: "퍼가기", 
                y:50,
                color: "#75BDF8"
            },
            { 
                x: "기타", 
                y:25,
                color: "#B8DFFF" 
            },
        ],
        subject: [
            {
                id: 1,
                title: "공유된 게시글",
                count: "298",
                gun: "건 / ",
                title2: "합계 ",
                number: "1,580,279알"
            },
            {
                id: 2,
                title: "훈훈알",
                count: "590,600",
                gun: "알",
                title2: "",
                number: ""
            },
            {
                id: 3,
                title: "추천수익",
                count: "142,857.9",
                gun: "",
                title2: "알",
                number: ""
            }
        ],
        open: [
            "2,890"
        ],
        reply:[
            "1,574"
        ],
    }
}
const ActivityAlogPage = () => {
    const alogRevenue = langActivityAlogPage.ko.revenue;
    const alogExpense = langActivityAlogPage.ko.expense;
    const open = langActivityAlogPage.ko.open;
    const reply = langActivityAlogPage.ko.reply;
    const subject = langActivityAlogPage.ko.subject;

    return(
        <>
            <ActivityGraph revenue={alogRevenue} expense={alogExpense}></ActivityGraph>
            <ActivityDivide open={open} reply={reply}></ActivityDivide>
            <ActivityContents contents={subject}></ActivityContents>
        </>
    );
}

export default ActivityAlogPage;