import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { sendText } from '../api/sendText';

const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends React.Component {
	state = {
		currentSpeech: '',
	}

	timer = null;

	shouldSendRequest = false;

	componentDidUpdate(prevProps, prevState) {
		if (!!this.props.transcript && prevProps.transcript === this.props.transcript && this.shouldSendRequest) {
			this.timer = setTimeout(() => {
				sendText(this.props.transcript).then((res) => {
					console.log(res);
					this.shouldSendRequest = false;
					this.props.addToDialog({role: 'human', text: this.props.transcript})
					this.props.addToDialog({role: 'robot', text: res.text})
				});
			}, 2000);
			console.log("same");
		} else if (this.timer) {
			clearTimeout(this.timer);
		}
		console.log(this.props.transcript);
	}
	
	render() { 
		console.log('shouldSendRequest ', this.shouldSendRequest);
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
			console.log('привет таня');
			onStart();
			this.shouldSendRequest = true;
		}
		
		if (transcript.toLowerCase().includes('вопрос')) {
			resetTranscript();
			console.log('вопрос');
			this.shouldSendRequest = true;
		}


		return null;
	};
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);