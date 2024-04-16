export interface UserDto {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthResponseDto {
  readonly user: UserDto;
  readonly accessToken: string;
}

export interface AuthState {
  user: UserDto | null;
  accessToken: string | null;
}
