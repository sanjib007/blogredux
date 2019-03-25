<?php

namespace App\Http\Controllers;

use App\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $category =  \App\Category::all();
        return response()->json($category);
    }

    public function getDataByValue($country_id = null, $category_id = null)
    {
        if ($country_id == null && $category_id == null) {
            $news = News::orderBy('id', 'DESC')->paginate(20);
        } else if ($country_id != null && $category_id == null) {
            $news = News::where('country_id', $country_id)
                ->orderBy('id', 'DESC')
                ->paginate(20);
        } else if ($country_id == null && $category_id != null) {
            $news = News::where('category_id', $category_id)
                ->orderBy('id', 'DESC')
                ->paginate(20);
        } else {
            $news = News::where('category_id', $category_id)
                ->where('country_id', $country_id)
                ->orderBy('id', 'DESC')
                ->paginate(20);
        }

        return response()->json($news);
    }

    public function insertNews(Request $request)
    {

        $news = new News();

        $news->newsTitle = $request->newsTitle;
        $news->description = $request->description;
        $news->category_id = $request->category_id;
        $news->country_id = $request->country_id;

        $news->save();
        if ($news->id > 0) {
            return response()->json(['message' => 'News inserted.', 'news' => $news], 200);
        } else {
            return response()->json(['error' => 'News is not inserted.'], 401);
        }
    }
}
