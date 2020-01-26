import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends React.Component {
	state = {
		currentSpeech: '',
	}

	timer = null;

	componentDidUpdate(prevProps, prevState) {
		if (this.timer) {
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(() => console.log('timer'), 1000);
		console.log(this.props.transcript);
	}
	
	render() {
		const {
			transcript,
			resetTranscript,
			browserSupportsSpeechRecognition,
			onStart,
		} = this.props;
		if (!browserSupportsSpeechRecognition) {
			return null;
		}
		console.log(transcript);
		if (transcript.toLowerCase().includes('привет')) {
			resetTranscript();
			console.log('привет');
			onStart();

			setTimeout(console.log('hi'), 1000);
		}
		
		if (transcript.toLowerCase().includes('вопрос')) {
			resetTranscript();
			console.log('вопрос');
		}


		return null;
	};
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);