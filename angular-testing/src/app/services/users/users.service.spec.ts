import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of } from 'rxjs'; // Add import
describe('UsersService', () => {
let service: UsersService;
beforeEach(() => {
TestBed.configureTestingModule({});
service = TestBed.inject(UsersService);
});
it('should be created', () => {
expect(service).toBeTruthy();
});
// Add tests for all() method
describe('all', () => {
it('should return all users', () => {
service.all().subscribe(res => {
expect(res).toEqual(service.users);
});
});
});
// Add tests for findOne() method
describe('findOne', () => {
it('should return a single user', () => {
const userResponse = {
id: '2',
name: 'Bob',
role: 'Developer',
pokemon: 'Charizard'
};
let response = new Object();
spyOn(service, 'findOne').and.returnValue(of(userResponse));
service.findOne('2').subscribe(res => {
response = res;
});
expect(response).toEqual(userResponse);
});
});
});