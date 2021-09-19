import './SwapStyle.css';
import SwapTable from '../swapTable/SwapTable';

<<<<<<< HEAD
function SwapRequest() {
  const [data, setData] = useState([]);

  const dataArr = () => {
    const doc = [
      {
        id: 1,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
=======

function SwapRequest() {

    const data = [
            {
                'id':1,
               'Employee':'Emmanuel Abu',
               'Date': '24 Aug 2021',
               'Start Time': '09:00am',
               'End Time':'04:00pm',
               'Shift':'Evening',
               'Total Swap Time' : '2',
               'Swap With':'Florence Uzo',
               'Swap Date':'27 Aug 2021',
               'Swap Start Time':'09:00am',
               'Swap End Time':'04:00pm',
               'Swap Shift':'Morning',
               'Action':'view'
            },
            {
                'id':2,
                'Employee':'Emmanuel Abu',
                'Date': '24 Aug 2021',
                'Start Time': '09:00am',
                'End Time':'04:00pm',
                'Shift':'Evening',
                'Total Swap Time' : '2',
                'Swap With':'Florence Uzo',
                'Swap Date':'27 Aug 2021',
                'Swap Start Time':'09:00am',
                'Swap End Time':'04:00pm',
                'Swap Shift':'Morning',
                'Action':'view'
            },
            {
                'id':3,
                'Employee':'Emmanuel Abu',
                'Date': '24 Aug 2021',
                'Start Time': '09:00am',
                'End Time':'04:00pm',
                'Shift':'Evening',
                'Total Swap Time' : '2',
                'Swap With':'Florence Uzo',
                'Swap Date':'27 Aug 2021',
                'Swap Start Time':'09:00am',
                'Swap End Time':'04:00pm',
                'Swap Shift':'Morning',
                'Action':'view'
            },
            {
              'id':4,
              'Employee':'Emmanuel Abu',
              'Date': '24 Aug 2021',
              'Start Time': '09:00am',
              'End Time':'04:00pm',
              'Shift':'Evening',
              'Total Swap Time' : '2',
              'Swap With':'Florence Uzo',
              'Swap Date':'27 Aug 2021',
              'Swap Start Time':'09:00am',
              'Swap End Time':'04:00pm',
              'Swap Shift':'Morning',
              'Action':'view'
          },
          {
            'id':5,
            'Employee':'Emmanuel Abu',
            'Date': '24 Aug 2021',
            'Start Time': '09:00am',
            'End Time':'04:00pm',
            'Shift':'Evening',
            'Total Swap Time' : '2',
            'Swap With':'Florence Uzo',
            'Swap Date':'27 Aug 2021',
            'Swap Start Time':'09:00am',
            'Swap End Time':'04:00pm',
            'Swap Shift':'Morning',
            'Action':'view'
        },
        {
          'id':6,
          'Employee':'Emmanuel Abu',
          'Date': '24 Aug 2021',
          'Start Time': '09:00am',
          'End Time':'04:00pm',
          'Shift':'Evening',
          'Total Swap Time' : '2',
          'Swap With':'Florence Uzo',
          'Swap Date':'27 Aug 2021',
          'Swap Start Time':'09:00am',
          'Swap End Time':'04:00pm',
          'Swap Shift':'Morning',
          'Action':'view'
>>>>>>> c860b74556a0e14c3936f46f37c2bf2c1f076a97
      },
      {
        id: 2,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
<<<<<<< HEAD
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
      {
        id: 3,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
      {
        id: 4,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
      {
        id: 5,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
      {
        id: 6,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
      {
        id: 7,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
      {
        id: 8,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
      {
        id: 9,
        Employee: 'Emmanuel Abu',
        Date: '24 Aug 2021',
        'Start Time': '09:00am',
        'End Time': '04:00pm',
        Shift: 'Evening',
        'Total Swap Time': '2',
        'Swap With': 'Florence Uzo',
        'Swap Date': '27 Aug 2021',
        'Swap Start Time': '09:00am',
        'Swap End Time': '04:00pm',
        'Swap Shift': 'Morning',
        Action: 'view',
      },
    ];

    setData(doc);
  };

  const showdpsh = (e) => {
    if (!e.target.matches('.klareshifts')) {
      var dropdowns = document.getElementsByClassName(
        'dropdown-content-shifts'
      );
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('klareshow')) {
          openDropdown.classList.remove('klareshow');
        } else {
          openDropdown.classList.add('klareshow');
        }
      }
    }
  };

  const showdropdepartment = (e) => {
    if (!e.target.matches('.klaredepartment')) {
      var dropdowns = document.getElementsByClassName(
        'dropdown-content-departments'
      );
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('klareshow')) {
          openDropdown.classList.remove('klareshow');
        } else {
          openDropdown.classList.add('klareshow');
        }
      }
    }
  };

  const showdropstatus = (e) => {
    if (!e.target.matches('.klarestatus')) {
      var dropdowns = document.getElementsByClassName(
        'dropdown-content-status'
      );
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('klareshow')) {
          openDropdown.classList.remove('klareshow');
        } else {
          openDropdown.classList.add('klareshow');
        }
      }
    }
  };

  useEffect(() => {
    dataArr();
    console.log(data);
  }, [data]);

  return (
    <div className='swap-app'>
      {/* <header className='swap-header'>
        <div className='klareOptionBox'>
          <span className='klaredepartment' onClick={showdropdepartment}>
            Departments
            <img alt='drop' src={dropimage} />
            <div className='dropdown-content-departments'>
              <span>Field Departments</span>
              <span>Human Resources</span>
              <span>IT</span>
              <span>Engineering</span>
            </div>
          </span>
          <span className='klarestatus' onClick={showdropstatus}>
            All Status
            <img alt='drop' src={dropimage} />
            <div className='dropdown-content-status'>
              <span>On duty</span>
              <span>Awaiting Shifts</span>
              <span>Off duty</span>
              <span>Not Assigned</span>
            </div>
          </span>
          <span className='klareshifts' onClick={showdpsh}>
            All Shifts
            <img alt='drop' src={dropimage} />
            <div className='dropdown-content-shifts'>
              <span>Morning</span>
              <span>Afternoon</span>
              <span>Evening</span>
            </div>
          </span>
          <button>Back</button>
        </div>
        <h1>Swap Shift Request</h1>
      </header> */}

      <SwapTable data={data} />
=======
        'End Time':'04:00pm',
        'Shift':'Evening',
        'Total Swap Time' : '2',
        'Swap With':'Florence Uzo',
        'Swap Date':'27 Aug 2021',
        'Swap Start Time':'09:00am',
        'Swap End Time':'04:00pm',
        'Swap Shift':'Morning',
        'Action':'view'
    },
    {
      'id':8,
      'Employee':'Emmanuel Abu',
      'Date': '24 Aug 2021',
      'Start Time': '09:00am',
      'End Time':'04:00pm',
      'Shift':'Evening',
      'Total Swap Time' : '2',
      'Swap With':'Florence Uzo',
      'Swap Date':'27 Aug 2021',
      'Swap Start Time':'09:00am',
      'Swap End Time':'04:00pm',
      'Swap Shift':'Morning',
      'Action':'view'
  },
  {
    'id':9,
    'Employee':'Emmanuel Abu',
    'Date': '24 Aug 2021',
    'Start Time': '09:00am',
    'End Time':'04:00pm',
    'Shift':'Evening',
    'Total Swap Time' : '2',
    'Swap With':'Florence Uzo',
    'Swap Date':'27 Aug 2021',
    'Swap Start Time':'09:00am',
    'Swap End Time':'04:00pm',
    'Swap Shift':'Morning',
    'Action':'view'
}
        ];


  return (
    <div className="swap-app">
      <header className="swap-header"> 
       <h1>
        Swap Shift Request
      </h1>
      </header>

      <SwapTable data={data}/>

>>>>>>> c860b74556a0e14c3936f46f37c2bf2c1f076a97
    </div>
  );
}

export default SwapRequest;
