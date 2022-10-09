interface ResponseType<T> {
	data: T;
	status: 'error' | 'success';
}


export interface API {
	'/user/login': ResponseType<{
		access_token: string;
		name: string;
	}>;
}
