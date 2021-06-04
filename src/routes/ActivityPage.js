import ActivityGraph from '../components/activity/ActivityGraph';
import ActivityDivide from '../components/activity/ActivityDivide';
import ActivityContents from '../components/activity/ActivityContents';
import Num3Comma from '../components/function/Num3Comma';

const langActivityPage = {
    ko:{
        revenue: [
            // x,color는 고정값
            { 
                x: "훈훈알",
                y: 22,
                color: "#fc6d89"
            },
            { 
                x: "질문", 
                y:3,
                color: "#f6bec9"
            },
            { 
                x: "답변", 
                y:25,
                color: "#ff9aad" 
            },
            { 
                x: "기타",
                y:50,
                color: "#fd0031"
            }
        ],
        expense: [
            // x,color는 고정값
            { 
                x: "감사알",
                y: 48,
                color: "#98D0FB"
            },
            { 
                x: "훈훈알(질문)", 
                y: 25,
                color: "#65BDF8"
            },
            { 
                x: "훈훈알(답변)", 
                y:24,
                color: "#BADFFF" 
            },
            { 
                x: "환전",
                y:3,
                color: "#DBEDFC"
            }
        ],
        subject: [
            //title,gun,title2는 고정값
            {
                id: 1,
                title: "감사알 지급 답변",
                count: "313",
                gun: "건 / ",
                title2: "감사알 지급율",
                number: "20.3%"
            },
            {
                id: 2,
                title: "채택된 답변",
                count: "578",
                gun: "건 / ",
                title2: "답변 채택율",
                number: "78.6%"
            },
            {
                id: 3,
                title: "추천수익",
                count: "1428579",
                gun: " ",
                title2: "알",
                number: ""
            }
        ],
        open: [
            "120"
        ],
        reply:[
            "108"
        ],
    }
}

const ActivityPage = () => {
    const revenue = langActivityPage.ko.revenue;
    const expense = langActivityPage.ko.expense;
    const open = Num3Comma(langActivityPage.ko.open);
    const reply = Num3Comma(langActivityPage.ko.reply);
    const subject = langActivityPage.ko.subject;

   const revenueSort = () => { 
        revenue.sort(function(a, b){
        return b.y - a.y;
    });
    }

    const expenseSort = () => { 
        expense.sort(function(a, b){
        return b.y - a.y;
    });
    }

    revenueSort();
    expenseSort();

    return(
        <>
            <ActivityGraph revenue={revenue} expense={expense} ></ActivityGraph>
            <ActivityDivide open={open} reply={reply} ></ActivityDivide>
            {
                subject.map((data) => {
                    return <ActivityContents key={data.id} title={data.title} count={data.count} gun={data.gun} title2={data.title2} number={data.number} al={data.al}/>
                })
            }
        </>
    );
}

export default ActivityPage;