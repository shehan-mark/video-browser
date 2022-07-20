import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "@headlessui/react";

import InputComp from "../input";
import CommentItem from "./comment-item";

import { selectWatch, updateVideo, toggleComments, selectCommentToggle } from "../../redux/app-state";

import { Comment, VideoMeta } from "../../interface";

const CommentSection = () => {
  const currentWatch: VideoMeta = useSelector(selectWatch);
  const enableComments: boolean = useSelector(selectCommentToggle);
  const dispatch = useDispatch();

  const handleToggle = (state: boolean) => {
    // console.log(state);
    dispatch(toggleComments(state));
  }

  const updateVidWithComment = (
    input: string,
    isEditing: boolean = false,
    commentIdentifier: number = 0
  ) => {
    let _c: Comment[] = [];
    if (currentWatch.comments && currentWatch.comments?.length > 0) {
      _c = [...currentWatch.comments];
    }
    if (isEditing) {
      const updatedComments = _c.map((com) => {
        if (com.dateTime === commentIdentifier) {
          return {
            comment: input,
            dateTime: com.dateTime,
            user: com.user,
          };
        }
        return com;
      });
      _c = [...updatedComments];
    } else {
      _c?.push({
        comment: input,
        dateTime: Date.now(),
        user: {
          username: "USeer789", // temp data, should take user from localstorage
          userAvatar: "",
          userId: "789455",
        },
      });
    }
    const _CurrentWatch: VideoMeta = {
      ...currentWatch,
      comments: _c,
    };
    dispatch(updateVideo(_CurrentWatch));
  };

  const removeComment = (commentIdentifier: number) => {
    let _c: Comment[] = [];
    if (currentWatch.comments && currentWatch.comments?.length > 0) {
      _c = [...currentWatch.comments];
    }

    const filteredComments = _c.filter((com) => (com.dateTime !== commentIdentifier))

    _c = [...filteredComments];
    const _CurrentWatch: VideoMeta = {
      ...currentWatch,
      comments: _c,
    };
    dispatch(updateVideo(_CurrentWatch));
  }

  const renderComments = () => {
    // console.log("COMMENTS", currentWatch.comments);
    if (currentWatch.comments) {
      return currentWatch.comments.map((comment) => {
        return (
          <CommentItem
            comment={comment}
            key={comment.dateTime}
            updateComment={updateVidWithComment}
            removeComment={removeComment}
          />
        );
      });
    }
    return null;
  };

  const renderCommentSection = () => {
    if (enableComments) {
      return (
        <>
          <InputComp
            label="Comment"
            callback={(input) => updateVidWithComment(input)}
            defaultValue={""}
            cancelCallback={() => console.log('cancel')}
          />
          {renderComments()}
        </>
      );
    }
    return null;
  };

  return (
    <div className="py-4">
      <div className="flex flex-row">
        <p className="text-white text-base mb-5 mr-5">Comments</p>
        <Switch
          checked={enableComments}
          onChange={handleToggle}
          className={`${
            enableComments ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable Comments</span>
          <span
            className={`${
              enableComments ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>
      </div>
      {renderCommentSection()}
    </div>
  );
};

export default CommentSection;
