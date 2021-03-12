import * as React from "react";
import { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import HomeScreen from "./components/HomeScreen";

// or any pure javascript modules available in npm
export default class App extends Component {
    render() {
        return <HomeScreen />;
    }
}

const styles = StyleSheet.create({});
