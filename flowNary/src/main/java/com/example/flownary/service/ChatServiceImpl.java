package com.example.flownary.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.flownary.dao.ChatDao;
import com.example.flownary.entity.Chat;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ChatServiceImpl implements ChatService {
	
	private final ChatDao cDao;

	@Override
	public Chat getChat(int cid) {
		return cDao.getChat(cid);
	}
	
	@Override
	public Chat getChatUid(int uid1, int uid2) {
		return cDao.getChatUid(uid1, uid2);
	}

	@Override
	public List<Chat> getChatList(int uid, int count) {
		return cDao.getChatList(uid, count);
	}

	@Override
	public List<Chat> getChatListImportant(int uid, int count) {
		return cDao.getChatListImportant(uid, count);
	}

	@Override
	public void insertChat(Chat chat) {
		cDao.insertChat(chat);
	}

	@Override
	public void updateChat(int status, int cid) {
		cDao.updateChat(status, cid);
	}

	@Override
	public void deleteChat(int cid) {
		cDao.deleteChat(cid);
	}
}
