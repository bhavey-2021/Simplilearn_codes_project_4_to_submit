import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[]=[
    {
      question : 'What is the primary color ',
      answer:[
        {option: 'blue ' , correct : true},
        {option: 'black ' , correct : false},
        {option: 'green ' , correct : false},
        {option: 'pink ' , correct :false }
      ]
    },
{
    question : 'What is not the primary color ',
    answer:[
      {option: 'o2 ' , correct : true},
      {option: 'o22 ' , correct : false},
      {option: 'o222 ' , correct : false},
      {option: 'o2222 ' , correct :false }
    ]
  },
{
  question : 'What is the primary color ',
  answer:[
    {option: 'o3 ' , correct : true},
    {option: '033 ' , correct : false},
    {option: 'o333 ' , correct : false},
    {option: 'o3333 ' , correct :false }
  ]
},
{
question : 'What is the primary color ',
answer:[
  {option: 'o4 ' , correct : true},
  {option: 'o44 ' , correct : false},
  {option: 'o444 ' , correct : false},
  {option: 'o4444 ' , correct :false }

]
},
{
question : 'What is the primary color ',
answer:[
  {option: 'o5 ' , correct : true},
  {option: 'o55 ' , correct : false},
  {option: 'o555 ' , correct : false},
  {option: 'o5555 ' , correct :false }

]
},
{
question : 'What is the primary color ',
answer:[
  {option: 'o6 ' , correct : true},
  {option: 'o66 ' , correct : false},
  {option: 'o666 ' , correct : false},
  {option: 'o6666 ' , correct :false }

]
},
{
question : 'What is the primary color ',
answer:[
  {option: 'blue ' , correct : true},
  {option: 'black ' , correct : false},
  {option: 'green ' , correct : false},
  {option: 'pink ' , correct :false }

]
},
{
question : 'What is the primary color ',
answer:[
  {option: 'blue ' , correct : true},
  {option: 'black ' , correct : false},
  {option: 'green ' , correct : false},
  {option: 'pink ' , correct :false }

]
},
{
question : 'What is the primary color ',
answer:[
  {option: 'blue ' , correct : true},
  {option: 'black ' , correct : false},
  {option: 'green ' , correct : false},
  {option: 'pink ' , correct :false }

]
},
]
  
  constructor() { }
  getQuizzes()
  {
    return this.quizzes;
  }

}
