/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => {
  before(() => todoPage.navigate())
  beforeEach(() => cy.eyesOpen({
    appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!',
    browser: [
      {name: 'chrome', width: 1024, height: 768},
      {name: 'chrome', width: 800, height: 600},
      {name: 'firefox', width: 1024, height: 768},
      {deviceName: 'iPhone X'},
    ]
  }));
  afterEach(() => cy.eyesClose());

  it('should look good', () => {
    cy.eyesCheckWindow('empty todo list');

    todoPage.addTodo('Clean room');
    todoPage.addTodo('Learn Javascript');

    cy.eyesCheckWindow('two todos');

    todoPage.toggleTodo(0);

    cy.eyesCheckWindow('mark as completed');
    
  });
});
