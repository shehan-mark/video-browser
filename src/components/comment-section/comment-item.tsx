import React, { useState } from 'react';
import { UserCircleIcon, TrashIcon, PencilIcon } from '@heroicons/react/solid';

import InputComp from '../input';
import { Comment } from '../../interface';

const CommentItem = ({
  comment,
  updateComment,
  removeComment,
}: {
  comment: Comment;
  updateComment: (input: string, isEditing: boolean, commentIdentifier: number) => void;
  removeComment: (identifier: number) => void;
}) => {

  const [editing, setEditing] = useState(false);

  const handleDoneEditing = (input: string) => {
    updateComment(input, true, comment.dateTime);
    setEditing(false);
  }

  const handleOnEdit = () => {
    setEditing(true);
  }

  const handleOnDelete = () => {
    removeComment(comment.dateTime);
  }

  if (editing) {
    return (
      <InputComp
        label="Comment"
        callback={handleDoneEditing}
        defaultValue={comment.comment}
        cancelCallback={() => setEditing(false)}
      />
    )
  }

  const renderDelete = () => {
    if (!editing) {
      return <TrashIcon className="w-5 text-gray-700 mx-4 hover:text-gray-500 cursor-pointer" onClick={handleOnDelete}/>;
    }
    return null;
  }

  return (
    <div className="w-full flex flex-row py-2">
      <div className="w-8 h-full avatar-wrapper flex items-center mr-2">
        <UserCircleIcon className="text-slate-500" />
      </div>
      <div className="w-full">
        <p className="text-sm text-slate-400">{comment.user.username}</p>
        <p className="text-base text-white">{comment.comment}</p>
      </div>
      <div className="w-fit flex flex-row">
        {renderDelete()}
        <PencilIcon className="w-5 text-gray-700 hover:text-gray-500 cursor-pointer" onClick={handleOnEdit}/>
      </div>
    </div>
  )
}

export default CommentItem;
