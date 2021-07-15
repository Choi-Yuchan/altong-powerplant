import ActivityGraph from '../components/activity/ActivityGraph';
import ActivityDivide from '../components/activity/ActivityDivide';
import ActivityContents from '../components/activity/ActivityContents';
import Num3Comma from '../components/function/Num3Comma';
import { useTranslation } from 'react-i18next';

const ActivityAlogPage = () => {
    const { t } = useTranslation(); 
    const langActivityAlogPage = {
        revenue: [
            { 
                x: t("scrap"),
                y: 25,
                color: "#fc6d89"
            },
            { 
                x: t("warming"), 
                y:48,
                color: "#fd0031"
            },
            { 
                x: t("view"), 
                y:24,
                color: "#ff9aad" 
            },
            { 
                x: t("etc"),
                y:3,
                color: "#f6bec9"
            }
        ],
        expense: [
            { 
                x: t("warming"),
                y: 25,
                color: "#98D0FB"
            },
            { 
                x: t("scrap"), 
                y:50,
                color: "#75BDF8"
            },
            { 
                x: t("etc"), 
                y:25,
                color: "#B8DFFF" 
            },
        ],
        subject: [
            {
                id: 1,
                title: t("sharedContent"),
                count: "298",
                gun: `${t("times")} /`,
                title2: t("total"),
                number: "1580279",
                al: t("al")
                
            },
            {
                id: 2,
                title: t("warming"),
                count: "590600",
                gun: "",
                al: t("al"),
                title2: "",
                number: ""
            },
            {
                id: 3,
                title: t("referral"),
                count: "1428579",
                gun: "",
                title2: "",
                al: t("al"),
                number: ""
            }
        ],
        open: [
            "2890"
        ],
        reply:[
            "1574"
        ],
}
    const alogRevenue = langActivityAlogPage.revenue;
    const alogExpense = langActivityAlogPage.expense;
    const open = Num3Comma(langActivityAlogPage.open);
    const reply = Num3Comma(langActivityAlogPage.reply);
    const subject = langActivityAlogPage.subject;

    return(
        <>
            <ActivityGraph revenue={alogRevenue} expense={alogExpense}/>
            <ActivityDivide open={open} reply={reply}/>
            {
                subject.map((data) => {
                    return <ActivityContents key={data.id} title={data.title} count={data.count} gun={data.gun} title2={data.title2} number={data.number} al={data.al}/>
                })
            }
        </>
    );
}

export default ActivityAlogPage;