website.addOnLoad(() =>
{
    function nextRdmNot(i, len)
    {
        let rdm = ~~(Math.random() * len);

        while(rdm == i)
            rdm = ~~(Math.random() * len);

        return rdm;
    }

    let flightsList = document.getElementById('flights');

    let airports = ['Baltimore/Washington International Thurgood Marshall Airport (BWI)',
    'LaGuardia Airport (LGA)',
    'Trenton-Mercer Airport (TTL)',
    'Philadelphia International Airport (PHL)',
    'Pittsburgh International Airport (PIT)',
    'Ronald Reagan Washington National (DCA)',
    'Washington Dulles International (IAD)',
    'Yeager Airport (CRW)',
    'John F Kennedy Airport (JFK)',
    'Wilmington Airport (ILG)',
    'Hagerstown Regional Airport (HGR)',
    'Atlantic City International Airport (ACY)',
    'Newark Liberty International Airport (EWR)',
    'Harrisburg International Airport (MDT)'];

    let from = 'PA';
    let to = 'asdf';
    let time = 'now';

    let list = `
    <tr>
        <th>Flight From</th>
        <th>Flight To</th>
        <th>Departure Time</th>
    </tr>`;

    let time = Date.now();

    for(let i = 0; i < 100; i++)
    {
        let rdm = nextRdmNot(-1, airports.length);
        list += `
    <tr>
        <td>${airports[rdm]}</td>
        <td>${airports[nextRdmNot(rdm, airports.length)]}</td>
        <td>${time}</td>
    </tr>`;

        time.hour++;
    }

    flightsList.innerHTML = list;
});
