class CommentsController < ApplicationController
  load_and_authorize_resource
  
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.new(comment_params)
    @comment.user = current_user
    @comment.save
    redirect_to post_path(@post)
  end

  def destroy
    @comment = Comment.find(params[:id])
    post = @comment.post
    @comment.destroy
    redirect_to post
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :body)
  end
  
end
