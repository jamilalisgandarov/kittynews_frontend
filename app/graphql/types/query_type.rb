module Types
  class QueryType < Types::BaseObject
    field :posts_all, [PostType], null: false
  
    field :post_view, PostType, null:false do
      argument :post_id, ID, required: true
    end 
    
    field :viewer, UserType, null: true

    def posts_all
      Post.reverse_chronological.all
    end

    def post_view(post_id:)
      Post.find(post_id)
    end

    def viewer
      if context[:current_user]
        User.find(context[:current_user][:id])
      else 
        nil
      end
    end
  end
end
