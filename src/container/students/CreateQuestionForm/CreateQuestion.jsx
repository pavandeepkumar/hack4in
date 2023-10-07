import { message } from 'antd';
import React, { useState } from 'react';

function CreateQuestion() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleOptionChange = (e, index) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        message.success('Question Added successfully');
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer('');

        // if (options.includes(correctAnswer)) {
        //     alert('Correct!');
        // } else {
        //     alert('Correct answer not found in options. Please update.');
        // }

        // Reset the selected answer for the next question
        setSelectedAnswer('');

    };

    return (
        <div className='bg-slate-200 min-h-screen flex justify-center items-center'>
            <div className='bg-transparent p-12 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-semibold mb-4'>Create Exam Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>Question</label>
                        <input type="text" placeholder='Enter question' value={question} onChange={(e) => setQuestion(e.target.value)} className='border rounded px-2 py-1 w-full border-gray-400' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>Options</label>
                        {options.map((option, index) => (
                            <div key={index} className='mb-2'>
                                <input
                                    type="text"
                                    placeholder='Enter option'
                                    value={option}
                                    onChange={(e) => handleOptionChange(e, index)}
                                    className='border rounded px-2 py-1 w-full border-gray-400'
                                />
                            </div>
                        ))}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>Correct Answer</label>
                        <input
                            type="text"
                            placeholder='Enter correct answer'
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                            className='border rounded px-2 py-1 w-full border-gray-400'
                        />
                    </div>
                    <button
                        type="submit" onClick={handleSubmit}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateQuestion;
