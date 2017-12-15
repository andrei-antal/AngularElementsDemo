import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {MyBatteryComponent} from './my-battery.component'
import {NgDirectivesModule} from '../../directives/ng_directives'

@NgModule({
  imports: [NgDirectivesModule],
	declarations: [MyBatteryComponent],
  entryComponents: [MyBatteryComponent],
	schemas: []
})
export class TestAppModule {}
