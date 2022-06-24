import React, {useState} from 'react';
import './style.css'
import { DateTime } from "luxon"

function DateTimePretty({children}) {
    const now = DateTime.now()
    const dateArr = children.props.date.split(' ')
    const baseTime = DateTime.fromISO(dateArr[0] + 'T' + dateArr[1])
    const diff = now.diff(baseTime, ['hours'])
    console.log(diff.values.hours)
    let prettyTime = 'x дней назад'
    if(diff.values.hours < 1){
        prettyTime = '12 минут назад'
    }else if(diff.values.hours > 1 && diff.values.hours < 24) {
        prettyTime = '5 часов назад'
    }
    return React.cloneElement(children, {date:prettyTime} )
}
function DateTimes(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty><DateTimes date={props.date} /></DateTimePretty>
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function Time() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-06-24 14:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}