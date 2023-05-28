import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JoeConfig } from 'src/app/models/joe-config';
import { StatusMessage } from 'src/app/models/status-message';
import { Trigger } from 'src/app/models/trigger';

@Component({
  selector: 'app-view-configuration',
  templateUrl: './view-configuration.component.html',
  styleUrls: ['./view-configuration.component.scss']
})
export class ViewConfigurationComponent implements OnInit {
  opened = false;

  joeBotProps: Observable<JoeConfig>;
  triggerData: Observable<Trigger[]>;
  statusMessages: Observable<StatusMessage[]>;

  constructor(
  ) { }

  ngOnInit(): void {

  }

}