import { insertData, readData } from "./sheetOperations.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const calender = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sept: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
}

const root = (req, res)=> {
    // res.sendFile(path.resolve(__dirname, '../view/build', 'index.html'));
    res.send("Hello Api Working")
}

const getSipData= async(req, res)=>{
    let from =  req.query.fromDate;
    let to = req.query.toDate;
    from  = from.split('-')
    to = to.split('-')
    from = from[2]+'-'+calender[from[1]]+'-'+from[0]
    to = to[2]+'-'+calender[to[1]]+'-'+to[0]
    let data = {}
    const sheetName = 'mutual';
    const columns = 'A:G'
    const value = 10000
    await readData(sheetName, columns).then(response=> data = response.values).catch(err => console.log(err));
    var fromTime = new Date(from).getTime();
    var toTime = new Date(to).getTime();
    var filteredDates = [];
    var row, date;
    data.map(item=> {
        row = item;
        let formattedDate =  row[0].split('-')
        formattedDate = formattedDate[2]+'-'+ calender[formattedDate[1]] +'-'+formattedDate[0]
        date = new Date(formattedDate);
        if (date.getTime() >= fromTime && date.getTime() <= toTime) {
            filteredDates.push(row);
        }
    })
    if(filteredDates.length===0){
        res.json({success:false,
        message: "Need to Enter dates in correct range"})
        return
    }
    let [dateArr, dateRes, hybrid, equity, midcap, smallcap, focus, large] = [[],[],[],[],[],[],[],[]];
    filteredDates.map(item=>{
        let formatDate = item[0].split('-')
        formatDate = formatDate[2]+'-'+ calender[formatDate[1]] +'-'+formatDate[0]
        dateArr.push(formatDate)
        formatDate = new Date(formatDate)
        dateRes.push(formatDate)
        smallcap.push(parseFloat(item[1]))
        focus.push(parseFloat(item[2]))
        large.push(parseFloat(item[3]))
        equity.push(parseFloat(item[4]))
        midcap.push(parseFloat(item[5]))
        hybrid.push(parseFloat(item[6]))
    })
    let [ hybrid_2, equity_2, midcap_2, smallcap_2, focus_2, large_2] = [[],[],[],[],[],[]];
    let index = 0;
    let dates_debug = [];
    dates_debug.push(dateArr[index])
    let count = 0
    while(index!=(dateArr.length - 1)){
        hybrid_2.push(value/hybrid[index])
        equity_2.push(value/equity[index])
        midcap_2.push(value/midcap[index])
        smallcap_2.push(value/smallcap[index])
        focus_2.push(value/focus[index])
        large_2.push(value/large[index])
        
        let result = new Date(dateArr[index]);
        result.setDate(result.getDate() + 30);
        let arr = dateRes
        arr.sort(function(a, b) {
            var distancea = Math.abs(result - a);
            var distanceb = Math.abs(result - b);
            return distancea - distanceb; // sort a before b when the distance is smaller
        });
        let nearestDate = new Date(arr[0])
        let dd = String(nearestDate.getDate()).padStart(2, '0');
        let mm = String(nearestDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = nearestDate.getFullYear();
        let today = yyyy+ '-' + mm + '-' + dd;
        dates_debug.push(today)
        index = dateArr.indexOf(today)
        count+=1
    }
    let [h,e,m,s,f,l] = [0,0,0,0,0,0]
    for(let i in hybrid_2){
        h+=hybrid_2[i]
        e+=equity_2[i]
        m+=midcap_2[i]
        s+=smallcap_2[i]
        f+=focus_2[i]
        l+=large_2[i]
    }
    hybrid = hybrid[hybrid.length-1]*h
    equity = equity[equity.length-1]*e 
    midcap = midcap[midcap.length-1]*m  
    smallcap = smallcap[smallcap.length-1]*s
    focus = focus[focus.length-1]*f
    large = large[large.length-1]*l
    res.json({
        success: true,
        message: "Successfully Fetched",
        date: dates_debug,
        count:count,
        hybridSip:  ((hybrid-(value*count))/(value*count))*100 ,
        hybrid: hybrid,
        equitySip:  ((equity-(value*count))/(value*count))*100 ,
        magEquity: equity,
        magMidcapSip: ((midcap-(value*count))/(value*count))*100 ,
        magMidcap: midcap,
        smallcapSip:  ((smallcap-(value*count))/(value*count))*100 ,
        smallcap: smallcap,
        focusedSip:  ((focus-(value*count))/(value*count))*100 ,
        focused: focus,
        largeSip: ((large-(value*count))/(value*count))*100 ,
        large: large
    });
}
const getMutualData = async(req,res)=>{
    let from =  req.query.fromDate;
    let to = req.query.toDate;
    from  = from.split('-')
    to = to.split('-')
    from = from[2]+'-'+calender[from[1]]+'-'+from[0]
    to = to[2]+'-'+calender[to[1]]+'-'+to[0]
    let data = {}
    const sheetName = 'mutual';
    const columns = 'A:G'
    await readData(sheetName, columns).then(response=> data = response.values).catch(err => console.log(err));
    var fromTime = new Date(from).getTime();
    var toTime = new Date(to).getTime();
    var filteredDates = [];
    var row, date;
    data.map(item=> {
        row = item;
        let formattedDate =  row[0].split('-')
        formattedDate = formattedDate[2]+'-'+ calender[formattedDate[1]] +'-'+formattedDate[0]
        date = new Date(formattedDate);
        if (date.getTime() >= fromTime && date.getTime() <= toTime) {
            filteredDates.push(row);
        }
    })
    if(filteredDates.length===0){
        res.json({success:false,
        message: "Need to Enter dates in correct range"})
        return;
    }
    let [dateRes, hybrid, equity, midcap, smallcap, focus, large] = [[],[],[],[],[],[],[]];
    filteredDates.map(item=>{
        dateRes.push(item[0])
        smallcap.push(((parseFloat(item[1])/parseFloat(filteredDates[0][1]))-1.0)*100.0)
        focus.push(((parseFloat(item[2])/parseFloat(filteredDates[0][2]))-1.0)*100.0)
        large.push(((parseFloat(item[3])/parseFloat(filteredDates[0][3]))-1.0)*100.0)
        equity.push(((parseFloat(item[4])/parseFloat(filteredDates[0][4]))-1.0)*100.0)
        midcap.push(((parseFloat(item[5])/parseFloat(filteredDates[0][5]))-1.0)*100.0)
        hybrid.push(((parseFloat(item[6])/parseFloat(filteredDates[0][6]))-1.0)*100.0)
    })
    res.json({
        success: true,
        message:"Successfully Sent",
        date: dateRes,
        hybrid:hybrid,
        magEquity:equity,
        magMidcap:midcap,
        smallcap:smallcap,
        focused:focus,
        large:large
    });
}
const getLifeData = async(req, res) =>{
    let from =  req.query.fromDate;
    let to = req.query.toDate;
    from  = from.split('-')
    to = to.split('-')
    from = from[2]+'-'+calender[from[1]]+'-'+from[0]
    to = to[2]+'-'+calender[to[1]]+'-'+to[0]
    console.log(from, to)
    let data = {}
    const sheetName = 'life';
    const columns = 'A:L'
    await readData(sheetName, columns).then(response=> data = response.values).catch(err => console.log(err));
    var fromTime = new Date(from).getTime();
    var toTime = new Date(to).getTime();
    var filteredDates = [];
    var row, date;
    data.map(item=> {
        row = item;
        let formattedDate =  row[0].split('-')
        formattedDate = formattedDate[2]+'-'+formattedDate[1]+'-'+formattedDate[0]
        date = new Date(formattedDate);
        if (date.getTime() >= fromTime && date.getTime() <= toTime) {
            filteredDates.push(row);
        }
    })
    if(filteredDates.length===0){
        res.json({success:false,
        message: "Need to Enter dates in correct range"})
        return;
    }
    let [dateRes, bal, bond, corp, equity, growth, mid] = [[],[],[],[],[],[],[]];
    filteredDates.map(item=>{
        dateRes.push(item[0])
        bal.push(((parseFloat(item[1])/parseFloat(filteredDates[0][1]))-1.0)*100.0)
        bond.push(((parseFloat(item[2])/parseFloat(filteredDates[0][2]))-1.0)*100.0)
        corp.push(((parseFloat(item[3])/parseFloat(filteredDates[0][3]))-1.0)*100.0)
        equity.push(((parseFloat(item[4])/parseFloat(filteredDates[0][4]))-1.0)*100.0)
        growth.push(((parseFloat(item[5])/parseFloat(filteredDates[0][5]))-1.0)*100.0)
        mid.push(((parseFloat(item[6])/parseFloat(filteredDates[0][6]))-1.0)*100.0)
    })
    res.json({
        success: true,
        message:"Successfully Sent",
        date: dateRes,
        balance:bal,
        bond:bond,
        corporate: corp,
        equity:equity,
        growth:growth,
        midcap:mid
    });
}

export {root, getLifeData, getSipData, getMutualData}
