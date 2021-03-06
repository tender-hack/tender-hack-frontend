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
		if (transcript.toLowerCase().includes('привет таня') || 
			transcript.toLowerCase().includes('привет аня')|| 
			transcript.toLowerCase().includes('привет ань')|| 
			transcript.toLowerCase().includes('привет тань')|| 
			transcript.toLowerCase().includes('тань привет')|| 
			transcript.toLowerCase().includes('таня привет')) {
			resetTranscript();
			onStart();
			this.shouldSendRequest = true;
		}
		
		if (transcript.toLowerCase().includes('таня скажи') ||
		transcript.toLowerCase().includes('тань скажи') ||
		transcript.toLowerCase().includes('таня подскажи') ||
		transcript.toLowerCase().includes('тань подскажи') ||
		transcript.toLowerCase().includes('таня ответь') ||
		transcript.toLowerCase().includes('тань ответь') ||
		transcript.toLowerCase().includes('скажи тань') ||
		transcript.toLowerCase().includes('скажи таня')) {
			resetTranscript();
			this.shouldSendRequest = true;
		}

		if (transcript.toLowerCase().includes('спасибо всё') || 
		transcript.toLowerCase().includes('всё отбой') || 
		transcript.toLowerCase().includes('всё хорош') || 
		transcript.toLowerCase().includes('всё пока') || 
		transcript.toLowerCase().includes('спасибо пока') || 
		transcript.toLowerCase().includes('закрыть диалог') || 
		transcript.toLowerCase().includes('давай пока') || 
		transcript.toLowerCase().includes('пока давай') || 
		transcript.toLowerCase().includes('всё закончили') || 
		transcript.toLowerCase().includes('всё не надо') || 
		transcript.toLowerCase().includes('всё давай пока') || 
		transcript.toLowerCase().includes('всё спасибо')) {
			resetTranscript();
			this.shouldSendRequest = false;
			this.props.closeSession();
		}

		return null;
	};
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);