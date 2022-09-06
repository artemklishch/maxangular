import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PostsService {
  createAndStorePost(title: string, content: string) {}

  fetchPosts() {}
}
