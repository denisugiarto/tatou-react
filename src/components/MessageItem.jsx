import Image from "next/image";
import CommentItem from "./CommentItem.astro";
import FormReply from "./FormReply.astro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessageItem = ({
    name,
    isAuthorLike = false,
    shareLink,
    comments,
    isOwner = false,
}) => {
    return (
        <section className="rounded-xl p-2 border border-primary-border shadow-lg">
            <div className="flex gap-2 flex-row">
                <Image
                    src="/assets/profile.png"
                    className="rounded-full w-10 h-10"
                    alt=""
                />
                <div className="grow overflow-hidden hover:overflow-visible">
                    <h2 className="font-medium text-lg">{name}</h2>
                    <p className="text-xs text-neutral-400 truncate">
                        Campaign name Campaign name
                    </p>
                </div>
                <p className="flex-none text-xs text-neutral-400 ml-auto flex items-baseline">
                    <FontAwesomeIcon
                        icon={"circle"}
                        className="text-primary mr-1 h-2 w-2"
                    />
                    Minutes
                </p>
            </div>
            <p className="text-xs text-neutral-900 mt-2 pb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam veniam fugiat aut delectus incidunt laudantium eum sed,
                minima illum harum dicta, atque laboriosam tempora blanditiis
                commodi sunt sint distinctio omnis.
            </p>
            <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                    <button className="btn !btn-sm btn-circle btn-primary bg-primary-pressed text-white">
                        <FontAwesomeIcon icon={"comment-dots"} />
                    </button>
                    {comments.length > 0 && (
                        <p className="text-sm font-medium">{comments.length}</p>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className={`btn btn-circle !btn-sm ${
                            isAuthorLike
                                ? "btn-error"
                                : "btn-primary hover:btn-error hover:text-white"
                        }`}
                    >
                        <FontAwesomeIcon icon={"heart"} />
                    </button>
                    <p className="text-sm font-medium grow">
                        {isAuthorLike && "You and"} 2K People{" "}
                        <span className="font-normal">likes</span>
                    </p>
                </div>
                <a
                    href={shareLink}
                    className="btn btn-circle bg-black text-white hover:bg-primary !btn-sm flex items-center ml-auto"
                >
                    <FontAwesomeIcon icon={"share-alt"} />
                </a>
            </div>
            {comments.length > 0 && (
                <div className="flex mt-4">
                    <div className="divider divider-horizontal mx-1 before:bg-neutral-200 after:bg-neutral-200 !gap-0" />
                    <div
                        id="commentsContent"
                        className="w-full flex flex-col gap-2"
                    >
                        {comments.slice(0, 5).map((comment, index) => (
                            <CommentItem
                                key={index}
                                name={comment.name}
                                message={comment.message}
                                times={comment.times}
                            />
                        ))}
                    </div>
                </div>
            )}
            {comments.length > 5 && (
                <button className="btn btn-primary !btn-xs block mx-auto mt-2">
                    Load more comments
                </button>
            )}
            {isOwner && <FormReply />}
        </section>
    );
};

export default MessageItem;
