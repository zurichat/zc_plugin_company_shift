import './SwapStyle.css';
import SwapTable from '../swapTable/SwapTable';


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
      },
      {
        'id':7,
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

    </div>
  );
}

export default SwapRequest;