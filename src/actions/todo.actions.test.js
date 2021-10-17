const todo_actions = require("./todo.actions")
// @ponicode
describe("todo_actions.addTodo", () => {
    test("0", () => {
        let callFunction = () => {
            todo_actions.addTodo("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            todo_actions.addTodo("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            todo_actions.addTodo("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            todo_actions.addTodo("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            todo_actions.addTodo("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            todo_actions.addTodo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
