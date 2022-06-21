module Mutations
    class CommentCreate < Mutations::BaseMutation
      null true
  
      argument :post_id, ID, required: true
      argument :text, String, required: true
  
      field :comment, Types::CommentType, null: true
      field :errors, [String], null: false
  
      def resolve(post_id:, text: nil)
        require_current_user!
  
        post = Post.find(post_id)
        comment = post.comments.create(text: text, user: context.current_user)
  
        {
          comment: comment,
          errors: [],
        }
      rescue ActiveRecord::RecordNotFound
        return_record_not_found
      end
    end
  end