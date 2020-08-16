import {error} from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
export default function myError() {
  error({
    title: 'Error!',
    text: "To many matches found. Please enter more specific query!"
  });
};
