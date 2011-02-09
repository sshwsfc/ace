package com.wiyun.engine.actions;

import com.wiyun.engine.BaseWYObject;
import com.wiyun.engine.nodes.Node;
import com.wiyun.engine.types.ICopyable;

/**
 * <p>动作的基类。动作封装一个特定行为，在运行时赋予动作一个目标，于是这个目标将会执行该动作。
 * 只有节点(Node)的子类才能执行一个动作。有些动作只有特定的节点类型才能运行，但是大部分动作都
 * 不限制节点具体类型。</p>
 * 
 * <p>这个类只是一个基类，本身不实现什么逻辑。正常来说它应该是一个抽象类，考虑到和native层交互
 * 的一些问题，没有把它设置为抽象类，但是要注意只有通过from方法从一个底层指针中实例化才有意义。</p>
 */
public class Action extends BaseWYObject implements ICopyable {
	/**
	 * <p>动作事件回调接口，这个接口里面的方法会在OpenGL线程中被调用，
	 * 不要在这个回调中做时间太长的操作。</p>
	 * 
	 * @since 1.5.0
	 */
	public static interface Callback {
		/**
		 * 当动作开始执行时被调用
		 * 
		 * @param actionPointer 动作对象的底层句柄，可以使用Action子类的相关方法从这个
		 * 		句柄中得到Action对象
		 */
		public void onStart(int actionPointer);
		
		/**
		 * 当动作结束时被调用, 可以继续通过isDone来判断动作是正常结束还是非正常结束
		 * 
		 * @param actionPointer 动作对象的底层句柄，可以使用Action子类的相关方法从这个
		 * 		句柄中得到Action对象
		 */
		public void onStop(int actionPointer);
		
		/**
		 * 在动作执行期间被调用
		 * 
		 * @param actionPointer 动作对象的底层句柄，可以使用Action子类的相关方法从这个
		 * 		句柄中得到Action对象
		 * @param t 当前的时间点，从0到1
		 */
		public void onUpdate(int actionPointer, float t);
	}
	
	public static Action from(int pointer) {
		return new Action;
	}
	
    public Node getTarget() {
    	int pointer = nativeGetTarget();
    	return Node.from(pointer);
    }

    public native int getTag();

    public native void setTag(int value);
    
    protected Action() {
    }
    
    protected Action(int pointer) {
    	super(pointer);
    }
    
	private native int nativeGetTarget();
    
    /**
     * 设置回调事件处理器
     * 
     * @param callback {@link Callback}
     * @since 1.5.0
     */
    public native void setCallback(Callback callback);

    /**
     * 生成动作的拷贝
     */
    public Action copy() {
    	return null;
    }
    
    protected native int nativeCopy();
    
    /**
     * 生成动作的反向动作，子类需要实现这个方法
     * 
     * @return 反向动作实例
     */
    public Action reverse() {
    	return null;
    }
    
    protected native int nativeReverse();
    
    /**
     * 开始在某个目标上执行该动作
     * 
     * @param target 目标节点对象
     */
    public native void start(Node target);

    /**
     * 停止动作的执行
     */
    public native void stop();

    /**
     * 检查动作是否完成
     * 
     * @return true表示动作已完成
     */
    public native boolean isDone();

    /**
     * 单步执行
     * 
     * @param delta delta是上一次调用step和本次调用step之间的时间间隔，单位是秒，类型是浮点。
     */
    public native void step(float delta);

    /**
     * 更新相关状态
     * 
     * @param input input是一个相对值，范围从0到1。假如动作的持续时间是2秒，当前已经过去了一秒，那么input是0.5。
     */
    public native void update(float input);
}