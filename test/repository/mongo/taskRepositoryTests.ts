///// <reference path="../../../typings.d.ts" />
//import * as chai from "chai";
//import "reflect-metadata";
//import TaskRepository from "../../../src/-hapi/-repositories/mongo/taskRepository";
//import Task from "../../../src/-hapi/core/task";
//import { ITaskRepository } from "../../../src/-hapi/-repositories/interfaces";
//import {IRepositoryConfig} from "../../../src/-hapi/configs/interfaces";
//import Kernel from "../../../src/-hapi/ioc";
//
//const configurations = Kernel.get<IRepositoryConfig>("IRepositoryConfig");
//const assert = chai.assert;
//
//describe("Mongo TaskRepository", function() {
//  it("Create a task", function(done) {
//      var repo: ITaskRepository = new TaskRepository(configurations);
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
