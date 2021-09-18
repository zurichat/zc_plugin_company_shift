import * as React from 'react';
import {
  ScheduleComponent,
  ResourcesDirective,
  ResourceDirective,
  ViewsDirective,
  ViewDirective,
  Inject,
  TimelineViews,
  Resize,
  DragAndDrop,
  TimelineMonth,
  Day,
} from '@syncfusion/ej2-react-schedule';
import './block-events.css';
import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';
import dataSource from './datasource.js';

export default class Calendar extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.blockData, null, true);
    this.employeeData = [
      {
        Text: 'Alice',
        Id: 1,
        GroupId: 1,
        Color: '#bbdc00',
        Designation: 'Content writer',
      },
      {
        Text: 'Nancy',
        Id: 2,
        GroupId: 2,
        Color: '#9e5fff',
        Designation: 'Designer',
      },
      {
        Text: 'Robert',
        Id: 3,
        GroupId: 1,
        Color: '#bbdc00',
        Designation: 'Software Engineer',
      },
      {
        Text: 'Robson',
        Id: 4,
        GroupId: 2,
        Color: '#9e5fff',
        Designation: 'Support Engineer',
      },
      {
        Text: 'Laura',
        Id: 5,
        GroupId: 1,
        Color: '#bbdc00',
        Designation: 'Human Resource',
      },
      {
        Text: 'Margaret',
        Id: 6,
        GroupId: 2,
        Color: '#9e5fff',
        Designation: 'Content Analyst',
      },
    ];
  }
  getEmployeeName(value) {
    return value.resourceData[value.resource.textField];
  }
  getEmployeeImage(value) {
    let resourceName = this.getEmployeeName(value);
    return resourceName.toLowerCase();
  }
  getEmployeeDesignation(value) {
    return value.resourceData.Designation;
  }
  resourceHeaderTemplate(props) {
    return (
      <div className='template-wrap'>
        <div className='employee-category'>
          <div
            className={'employee-image ' + this.getEmployeeImage(props)}
          ></div>
          <div className='employee-name'>{this.getEmployeeName(props)}</div>
          <div className='employee-designation'>
            {this.getEmployeeDesignation(props)}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper drag-sample-wrapper'>
            <div className='schedule-container'>
              <ScheduleComponent
                ref={(schedule) => (this.scheduleObj = schedule)}
                cssClass='block-events'
                width='100%'
                height='650px'
                currentView='TimelineDay'
                resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
                eventSettings={{
                  dataSource: this.data,
                }}
                group={{ enableCompactView: false, resources: ['Employee'] }}
              >
                <ResourcesDirective>
                  <ResourceDirective
                    field='EmployeeId'
                    title='Employees'
                    name='Employee'
                    allowMultiple={true}
                    dataSource={this.employeeData}
                    textField='Text'
                    idField='Id'
                    colorField='Color'
                  ></ResourceDirective>
                </ResourcesDirective>
                <ViewsDirective>
                  <ViewDirective option='Day' />
                  <ViewDirective option='TimelineDay' />
                  <ViewDirective option='TimelineMonth' />
                </ViewsDirective>
                <Inject
                  services={[
                    Day,
                    TimelineViews,
                    TimelineMonth,
                    Resize,
                    DragAndDrop,
                  ]}
                />
              </ScheduleComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
