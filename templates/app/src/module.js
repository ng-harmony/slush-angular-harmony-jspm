import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource";
import { Module } from "ng-harmony/ng-harmony-module";

var module = new Module("todomvc", ["ngRoute", "ngResource"]);

export default module;