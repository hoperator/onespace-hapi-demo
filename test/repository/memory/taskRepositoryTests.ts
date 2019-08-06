///// <reference path="../../../typings.d.ts" />
//import * as chai from "chai";
//import TaskRepository from "../../../src/-hapi/-repositories/memory/taskRepository";
//import Task from "../../../src/-hapi/core/task";
//import { ITaskRepository } from "../../../src/-hapi/-repositories/interfaces";
//
//let assert = chai.assert;
//
//describe("Memory TaskRepository", function() {
//  it("Create a task", function(done) {
//      var repo: ITaskRepository = new TaskRepository();
//
//      var task: Task = {
//          _id: undefined,
//          name: "task",
//          description: "teste",
//          completed: false,
//          createdDate: undefined,
//          updatedDate: undefined
//      };
//
//      repo.create(task).then((createdTask) => {
//          assert.isNotNull(task._id);
//          assert.isNotNull(task.createdDate);
//          done();
//      }).catch((error) => {
//          done(error);
//      });
//  });
//});
