class Api::SessionsController < ApplicationController
    # before_action :require_login, only: :destroy

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render '/api/users/show'
        else
            render json: { error: 'Invalid email/password. Please try again.'}, status: 401
        end
    end

    def destroy
        logout
        render plain: 'successfully logged out!'
        # @user = current_user
        # if @user
        #     logout
        #     render plain: 'successfully logged out!'
        # else
        #     render json: ['Error: nobody logged in!'], status: 404
        # end
    end
end
