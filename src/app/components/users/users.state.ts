import {Users} from '../../models';
import {ComponentState} from '../../helpers/component.state';

export interface UserState extends ComponentState {
  users?: Users;
}
