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
				if (!!this.props.transcript) {
					this.props.addToDialog({role: 'human', text: this.props.transcript})
					
					sendText(this.props.transcript).then((res) => {
						this.shouldSendRequest = false;
						this.props.addToDialog({role: 'robot', ...res})
					});

					this.props.resetTranscript();
				}
			}, 2000);
		} else 
		if (this.timer) {
			clearTimeout(this.timer);
		}
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
			onStart();
			this.shouldSendRequest = true;
		}
		
		if (transcript.toLowerCase().includes('вопрос')) {
			resetTranscript();
			this.shouldSendRequest = true;
		}


		return null;
	};
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);