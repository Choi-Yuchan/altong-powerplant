import ActivityGraph from '../components/activity/ActivityGraph';
import ActivityDivide from '../components/activity/ActivityDivide';
import ActivityContents from '../components/activity/ActivityContents';
import Num3Comma from '../components/function/Num3Comma';
import { useTranslation } from 'react-i18next';



const ActivityPage = () => {
    const { t } = useTranslation();
    const langActivityPage = {
            revenue: [
                // x,color는 고정값
                { 
                    x: t("warming"),
                    y: 22,
                    color: "#fc6d89"
                },
                { 
                    x: t("question"), 
                    y:3,
                    color: "#f6bec9"
                },
                { 
                    x: t("answer"), 
                    y:25,
                    color: "#ff9aad" 
                },
                { 
                    x: t("etc"),
                    y:50,
                    color: "#fd0031"
                }
            ],
            expense: [
                // x,color는 고정값
                { 
                    x: t("gratitude"),
                    y: 48,
                    color: "#98D0FB"
                },
                { 
                    x: t("warmingQuestion"), 
                    y: 25,
                    color: "#65BDF8"
                },
                { 
                    x: t("warmingAnswer"), 
                    y:24,
                    color: "#BADFFF" 
                },
                { 
                    x: t("exchange"),
                    y:3,
                    color: "#DBEDFC"
                }
            ],
            subject: [
                {
                    id: 1,
                    title: t("gratitudeAnswer"),
                    count: "313",
                    gun: `${t("times")} /`,
                    title2: t("gratitudeRate"),
                    number: "20.3%"
                },
                {
                    id: 2,
                    title: t("selectedAnswer"),
                    count: "578",
                    gun: `${t("times")} /`,
                    title2: t("selectedRate"),
                    number: "78.6%"
                },
                {
                    id: 3,
                    title: t("referral"),
                    count: "1428579",
                    gun: " ",
                    title2: t("al"),
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

    const revenue = langActivityPage.revenue;
    const expense = langActivityPage.expense;
    const open = Num3Comma(langActivityPage.open);
    const reply = Num3Comma(langActivityPage.reply);
    const subject = langActivityPage.subject;

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