import { Box, Typography, useTheme } from "@mui/material";
import { MESSAGE_TYPE, taskChatsData } from "./meta";
import Input from "../../components/input";
import { ReactComponent as EllipsisHorizontal } from "../../assets/icons/ellipsis-horizontal.svg";
import { ReactComponent as Mic } from "../../assets/icons/mic.svg";
import { ReactComponent as Share } from "../../assets/icons/send.svg";
import { ReactComponent as Pause } from "../../assets/icons/pause.svg";
import { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ProfileOne from "../../assets/icons/portraitOne.png";
import { StyledButton } from "../../components/tasks-card/tasks-card.styles";
import Waveform from "../../components/waveform";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const TasksChat = () => {
  const theme = useTheme();

  const [message, setMessage] = useState<string>("");

  const [chatsData, setChatsData] = useState<any>(taskChatsData.chats);

  // const { transcript, resetTranscript } = useSpeechRecognition();
  // const [isListening, setIsListening] = useState(false);
  // const microphoneRef = useRef(null);

  // const handleListing = () => {
  //   setIsListening(true);
  //   microphoneRef.current &&
  //     (microphoneRef.current as any).classList.add("listening");
  //   SpeechRecognition.startListening({
  //     continuous: true,
  //   });
  // };
  // const stopHandle = () => {
  //   setIsListening(false);
  //   microphoneRef.current &&
  //     (microphoneRef.current as any).classList.remove("listening");
  //   SpeechRecognition.stopListening();
  // };
  // const handleReset = () => {
  //   stopHandle();
  //   resetTranscript();
  // };

  const chatRef = useRef<HTMLDivElement>(null);

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err)
  );

  const handleMessageSend = () => {
    const data = {
      profile: {
        id: 2,
        name: "Dio",
        image: ProfileOne,
        isActive: true,
      },
      messageType: MESSAGE_TYPE.SENT,
      message: message,
      time: "08:01 am",
    };
    setChatsData([...chatsData, data]);
    setMessage("");
  };

  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const data = {
      profile: {
        id: 2,
        name: "Dio",
        image: ProfileOne,
        isActive: true,
      },
      messageType: MESSAGE_TYPE.SENT,
      audioUrl: url,
      time: "08:01 am",
    };
    setChatsData([...chatsData, data]);
  };

  const getImageWithBadge = (
    src: string,
    isActive: boolean,
    id: number,
    width: number = 32,
    height: number = 32
  ) => (
    <Box className="relative" key={id}>
      <img
        src={src}
        alt={src}
        className="rounded-full"
        width={width}
        height={height}
      />
      <Box
        bgcolor={isActive ? theme.palette.malachite : theme.palette.fireBush}
        className="rounded-full border-2 border-white w-2 h-2 absolute bottom-[-1px] right-[1px]"
      />
    </Box>
  );

  useEffect(() => {
    chatRef.current && chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatsData.length]);

  return (
    <div className="overflow-hidden">
      <Box
        className="flex flex-col gap-6 h-full px-[30px] py-5 relative"
        bgcolor={theme.palette.white}
      >
        <Box className="flex justify-between items-center">
          <Typography color={theme.palette.portGore} className="flex ">
            Member
            <Typography color={theme.palette.royalBlue} fontWeight={600}>
              {`(${taskChatsData.membersCount})`}
            </Typography>
          </Typography>
          <Typography
            color={theme.palette.regentGray}
            fontWeight={600}
            fontSize={14}
          >
            View All
          </Typography>
        </Box>
        <Box className="flex gap-3">
          {taskChatsData.members.map((data) =>
            getImageWithBadge(data.image, data.isActive, data.id)
          )}
        </Box>
        <Typography color={theme.palette.portGore} className="flex ">
          Group Chat
        </Typography>
        <Box className="flex flex-col gap-6 h-[calc(100%-200px)] overflow-auto pb-4">
          {chatsData.map((data: any, index: number) => {
            return (
              <Box
                className={`flex gap-2 items-end ${
                  data.messageType === MESSAGE_TYPE.SENT &&
                  "self-end flex-row-reverse"
                }`}
                ref={chatRef}
                key={index}
              >
                {getImageWithBadge(
                  data.profile.image,
                  data.profile.isActive,
                  data.profile.id,
                  18,
                  18
                )}
                <Box
                  className={`px-2 py-1.5 rounded-t-lg ${
                    data.messageType === MESSAGE_TYPE.SENT
                      ? "rounded-bl-lg"
                      : "rounded-br-lg"
                  }`}
                  bgcolor={
                    data.messageType === MESSAGE_TYPE.RECEIVED
                      ? theme.palette.athensGray
                      : theme.palette.royalBlue
                  }
                >
                  {data.audioUrl ? (
                    <Waveform
                      audio={data.audioUrl}
                      barColor={
                        data.messageType === MESSAGE_TYPE.RECEIVED
                          ? theme.palette.royalBlue
                          : theme.palette.white
                      }
                    />
                  ) : (
                    <Typography
                      color={
                        data.messageType === MESSAGE_TYPE.RECEIVED
                          ? theme.palette.slateGray
                          : "white"
                      }
                      className="!text-xs"
                    >
                      {data.message}
                    </Typography>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className="flex self-end justify-between absolute bottom-6 left-6 right-6 items-center gap-3 z-10">
          {!recorderControls.isRecording && (
            <Input
              placeholder="write here.."
              endAdornment={
                message && (
                  <Share
                    className="hover:cursor-pointer"
                    onClick={handleMessageSend}
                  />
                )
              }
              onKeyDown={(event) =>
                event.key === "Enter" && handleMessageSend()
              }
              value={message}
              className="!text-sm"
              onChange={(event) => setMessage(event?.target.value)}
            />
          )}
          {/* {isListening ? (
          <StyledButton className="hover:cursor-pointer" onClick={stopHandle}>
            <Pause />
          </StyledButton>
        ) : (
          <Mic className="hover:cursor-pointer" onClick={handleListing} />
        )} */}
          <AudioRecorder
            onRecordingComplete={addAudioElement}
            recorderControls={recorderControls}
            classes={{
              AudioRecorderClass: "max-w-full",
            }}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            onNotAllowedOrFound={(err) => console.table(err)}
            downloadOnSavePress={false}
            downloadFileExtension="mp3"
            mediaRecorderOptions={{
              audioBitsPerSecond: 128000,
            }}
            showVisualizer={true}
          />
          <EllipsisHorizontal className="hover:cursor-pointer" />
        </Box>
      </Box>
    </div>
  );
};
export default TasksChat;
