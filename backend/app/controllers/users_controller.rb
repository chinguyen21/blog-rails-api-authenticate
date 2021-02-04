class UsersController < ApplicationController


    def index
        users = User.all 
        render json: users, except: [:created_at, :updated_at]
    end 

    def create
        user = User.new(user_params)
        if user.save
            render json: {
                status: 200,
                user: user
                }
        else
            render json: {status: 401, errors: user.errors.full_messages}
        end
    end 

    # def auth
    #     user = User.find_by(email: params[:email])
    #     if user && user.authenticate(params[:password])
    #         render json: {
    #           status: 200,
    #           user: user
    #         }
    #     else
    #         render json: {status: 401, message: "Wrong email or password"}
    #     end
    # end


    # private

    # def user_params
    #     params.permit(:name, :age, :email, :password, :password_confirmation)
    # end 
end