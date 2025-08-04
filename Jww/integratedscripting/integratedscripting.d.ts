/**
 * Typings for Integrated Scripting.
 * This file is auto-generated on server start, so do not modify this file!
 */

declare global {
  var idContext: Context;
}

export interface Context {
  ops: Operations;
}

export interface Operations {
  /**
   * 掉落物对应物品
   */
  entityItem: (arg0: ValueEntity) => ValueItemstack;
  /**
   * The bucket fill sound for the fluid
   */
  fluidstackBucketFillSound: (arg0: ValueFluidstack) => string;
  /**
   * 用列表中的参数依次执行运算符 输出新的映射值列表
   */
  operatorMap: (arg0: Function, arg1: any[]) => any[];
  /**
   * 指定物品中有流体
   */
  itemstackIsFluidStack: (arg0: ValueItemstack) => boolean;
  anyLessThanOrEquals: (arg0: any, arg1: any) => boolean;
  /**
   * Get a copy of the given NBT compound tag with the given NBT Integer Array entry
   */
  nbtWithIntList: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * Get a copy of the given NBT compound tag with the given Integer entry
   */
  nbtWithInteger: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  /**
   * Create an NBT Byte tag from the given Boolean value
   */
  booleanAsNbt: (arg0: boolean) => Record<string, any>;
  /**
   * 液体是否相同
   */
  fluidstackIsRawEqual: (arg0: ValueFluidstack, arg1: ValueFluidstack) => boolean;
  /**
   * 此列表是否包含指定元素
   */
  listContains: (arg0: any[], arg1: any) => boolean;
  /**
   * 取两个数值中的最小值
   */
  numberMin: (arg0: number, arg1: number) => number;
  /**
   * The NBT List value in the given NBT compound tag with the given key
   */
  nbtGetListTag: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * 实体是否在燃烧
   */
  entityEntityIsBurning: (arg0: ValueEntity) => boolean;
  /**
   * 如果指定的项目可以保存FE
   */
  itemstackIsFeContainer: (arg0: ValueItemstack) => boolean;
  longLongToInteger: (arg0: number) => number;
  /**
   * 实体种类的名称.
   */
  entityType: (arg0: ValueEntity) => string;
  /**
   * Get a copy of the given ingredients with the given item at the given ingredient position
   */
  ingredientsWithItem: (arg0: ValueIngredients, arg1: number, arg2: ValueItemstack) => ValueIngredients;
  stringParseAsNbt: (arg0: string) => Record<string, any>;
  /**
   * Search for the given regular expression and return in that match a list of all its groups, in the given string.
   */
  stringRegexGroups: (arg0: string, arg1: string) => any[];
  /**
   * The value type in the given NBT compound tag corresponding to the given key
   */
  nbtType: (arg0: Record<string, any>, arg1: string) => string;
  doubleDoubleToLong: (arg0: number) => number;
  /**
   * 比较两个指定物品是否相同,包括NBT
   */
  itemstackIsNbtEqual: (arg0: ValueItemstack, arg1: ValueItemstack) => boolean;
  /**
   * 指定实体死亡的声音
   */
  entityDeathSound: (arg0: ValueEntity) => string;
  /**
   * 取断言的相反值
   */
  operatorNegation: (arg0: Function) => Function;
  /**
   * Returns a list of items present in both supplied lists
   */
  listIntersection: (arg0: any[], arg1: any[]) => any[];
  /**
   * 取消两个谓词的分离。
   */
  operatorDisjunction: (arg0: Function, arg1: Function) => Function;
  /**
   * 实体生命值
   */
  entityHealth: (arg0: ValueEntity) => number;
  /**
   * 实体正手持的物品
   */
  entityHeldItem: (arg0: ValueEntity) => ValueItemstack;
  /**
   * Copy the given fluid with the given amount
   */
  fluidstackWithAmount: (arg0: ValueFluidstack, arg1: number) => ValueFluidstack;
  /**
   * Create an NBT Integer tag from the given Integer value
   */
  integerAsNbt: (arg0: number) => Record<string, any>;
  /**
   * 从列表中删除第一个元素。
   */
  listTail: (arg0: any[]) => any[];
  /**
   * 指定方块被破坏的声音
   */
  blockBreakSound: (arg0: ValueBlock) => string;
  /**
   * 将指定的运算符应用于列表的所有元素，以将列表减少为一个值。
   */
  operatorReduce: (arg0: Function, arg1: any[], arg2: any) => any;
  /**
   * Get a copy of the given ingredients with the given fluid at the given ingredient position
   */
  ingredientsWithFluid: (arg0: ValueIngredients, arg1: number, arg2: ValueFluidstack) => ValueIngredients;
  /**
   * The Tag names (strings) of the given block
   */
  blockTags: (arg0: ValueBlock) => any[];
  stringParseAsDouble: (arg0: string) => number;
  /**
   * Get a copy of the given NBT compound tag with the given Double as a float entry
   */
  nbtWithFloat: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  numberModulus: (arg0: number, arg1: number) => number;
  /**
   * 实体宽度
   */
  entityWidth: (arg0: ValueEntity) => number;
  /**
   * 当前物品栈物品数量
   */
  itemstackSize: (arg0: ValueItemstack) => number;
  /**
   * 实体是否为动物
   */
  entityIsAnimal: (arg0: ValueEntity) => boolean;
  /**
   * Create an NBT String tag from the given String value
   */
  stringAsNbt: (arg0: string) => Record<string, any>;
  integerLeftShift: (arg0: number, arg1: number) => number;
  /**
   * 指定的值是否为空
   */
  anyIsNull: (arg0: any) => boolean;
  /**
   * 实体是否为玩家
   */
  entityIsPlayer: (arg0: ValueEntity) => boolean;
  /**
   * 指定物品对应的Mod名称
   */
  itemstackMod: (arg0: ValueItemstack) => string;
  /**
   * The fluid temperature
   */
  fluidstackTemperature: (arg0: ValueFluidstack) => number;
  /**
   * Get a copy of the given NBT compound tag with the given NBT entry
   */
  nbtWithTag: (arg0: Record<string, any>, arg1: string, arg2: Record<string, any>) => Record<string, any>;
  integerIntegerToLong: (arg0: number) => number;
  /**
   * The difference of the given NBT compound tags. Nested tags will be subtracted recursively.
   */
  nbtMinus: (arg0: Record<string, any>, arg1: Record<string, any>) => Record<string, any>;
  /**
   * In the context of the given Player Entity, get the tooltip of the given item as a list of strings.
   */
  entityEntityItemTooltip: (arg0: ValueEntity, arg1: ValueItemstack) => any[];
  /**
   * Get a copy of the given NBT compound tag with the given NBT Long Array entry
   */
  nbtWithListLong: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * 获取指定字符串的长度
   */
  stringLength: (arg0: string) => number;
  /**
   * The Tag values (items) of the given item tag name
   */
  stringItemsByTag: (arg0: string) => any[];
  /**
   * 创建一个新的运算符，将输入的第一个和第二个运算符的输出传递到第三个运算符.
   */
  operatorPipe2: (arg0: Function, arg1: Function, arg2: Function) => Function;
  /**
   * Get the Integer value of the given NBT Integer tag
   */
  nbtAsInt: (arg0: Record<string, any>) => number;
  /**
   * 该物品能否采集指定方块
   */
  itemstackCanHarvest: (arg0: ValueItemstack, arg1: ValueBlock) => boolean;
  /**
   * 在列表中找到指定元素的次数。
   */
  listCount: (arg0: any[], arg1: any) => number;
  /**
   * Get the value of the given data component key.
   */
  itemstackDataValue: (arg0: ValueItemstack, arg1: string) => Record<string, any>;
  booleanNand: (arg0: boolean, arg1: boolean) => boolean;
  /**
   * 实体作为盔甲携带的物品列表
   */
  entityArmorInventory: (arg0: ValueEntity) => any[];
  /**
   * 创建一个新的运算符,将输入的第一个操作的输出值传递给第二个运算符
   */
  operatorPipe: (arg0: Function, arg1: Function) => Function;
  /**
   * 实体是否为矿车
   */
  entityIsMinecart: (arg0: ValueEntity) => boolean;
  /**
   * 以指定的分隔符(正则表达式)拆分字符串,并返回拆分后的列表.
   */
  stringSplitOnRegex: (arg0: string, arg1: string) => any[];
  numberLessThan: (arg0: number, arg1: number) => boolean;
  integerComplement: (arg0: number) => number;
  /**
   * 指定物品的燃烧时间(Tick)
   */
  itemstackBurnTime: (arg0: ValueItemstack) => number;
  /**
   * 指定谓词对于列表中的元素返回true的次数。
   */
  listCountPredicate: (arg0: any[], arg1: Function) => number;
  /**
   * 实体是否为怪物
   */
  entityIsMob: (arg0: ValueEntity) => boolean;
  /**
   * Get a copy of the given NBT compound tag with the given Boolean entry
   */
  nbtWithBoolean: (arg0: Record<string, any>, arg1: string, arg2: boolean) => Record<string, any>;
  /**
   * 实体可存储能量的上限.
   */
  entityEnergyCapacity: (arg0: ValueEntity) => number;
  /**
   * Get the Long value of the given NBT Long tag
   */
  nbtAsLong: (arg0: Record<string, any>) => number;
  /**
   * 此列表是否为空
   */
  listIsEmpty: (arg0: any[]) => boolean;
  /**
   * 当前物品的损害值
   */
  itemstackDamage: (arg0: ValueItemstack) => number;
  /**
   * Round to the nearest Integer
   */
  numberRound: (arg0: number) => number;
  /**
   * 实体中包含的流体.
   */
  entityFluids: (arg0: ValueEntity) => any[];
  /**
   * If the fluid is lighter than air
   */
  fluidstackIsLighterThanAir: (arg0: ValueFluidstack) => boolean;
  /**
   * Check if two lists are equal according to set semantics.
   */
  listEquals_set: (arg0: any[], arg1: any[]) => boolean;
  /**
   * 骑在实体上的实体
   */
  entityMounted: (arg0: ValueEntity) => any[];
  stringParseAsLong: (arg0: string) => number;
  /**
   * If the given NBT compound tag contains the given key
   */
  nbtHasKey: (arg0: Record<string, any>, arg1: string) => boolean;
  /**
   * 获取指定物品的NBT标签
   */
  itemstackNbt: (arg0: ValueItemstack) => Record<string, any>;
  /**
   * 指定的方块是否不透明
   */
  blockIsOpaque: (arg0: ValueBlock) => boolean;
  /**
   * 实体是否在水中
   */
  entityIsWet: (arg0: ValueEntity) => boolean;
  booleanOr: (arg0: boolean, arg1: boolean) => boolean;
  /**
   * 复制输入值
   */
  anyIdentity: (arg0: any) => any;
  /**
   * 液体流动性
   */
  fluidstackViscosity: (arg0: ValueFluidstack) => number;
  /**
   * Get a copy of the given recipe with the given ingredients as output
   */
  recipeWithOutput: (arg0: ValueRecipe, arg1: ValueIngredients) => ValueRecipe;
  /**
   * If the raw items of the given items are equal, ignoring NBT and damage values.
   */
  itemstackIsEqualRaw: (arg0: ValueItemstack, arg1: ValueItemstack) => boolean;
  /**
   * Get a copy of the given NBT compound tag without the given key
   */
  nbtWithout: (arg0: Record<string, any>, arg1: string) => Record<string, any>;
  /**
   * Tests whether two values are unequal. The types of both must be the same.
   */
  anyNotEquals: (arg0: any, arg1: any) => boolean;
  numberSubtract: (arg0: number, arg1: number) => number;
  /**
   * 获取指定变量名或变量值的字符串形式
   */
  namedName: (arg0: any) => string;
  /**
   * 指定物品展示框内物品的旋转情况
   */
  entityItemFrameRotation: (arg0: ValueEntity) => number;
  /**
   * Get the Byte List value of the given NBT Byte Array tag
   */
  nbtAsByteList: (arg0: Record<string, any>) => any[];
  /**
   * Create an NBT List tag from the given NBT List value
   */
  tagListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * 实体中包含的物品.
   */
  entityItems: (arg0: ValueEntity) => any[];
  /**
   * The output ingredients of the given recipe
   */
  recipeOutput: (arg0: ValueRecipe) => ValueIngredients;
  /**
   * Get a copy of the given ingredients with the given list of fluids at the given ingredient position
   */
  ingredientsWithFluids: (arg0: ValueIngredients, arg1: any[]) => ValueIngredients;
  /**
   * 用指定的值执行运算符
   */
  operatorApply: (arg0: Function, arg1: any) => any;
  /**
   * Show a shorter, less precise representation of a Number
   */
  numberCompact: (arg0: number) => string;
  /**
   * Create an NBT Integer Array tag from the given Integer List value
   */
  intListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * The Compound value in the given NBT compound tag with the given key
   */
  nbtGetCompound: (arg0: Record<string, any>, arg1: string) => Record<string, any>;
  /**
   * 指定物品中对应的流体
   */
  itemstackFluidStack: (arg0: ValueItemstack) => ValueFluidstack;
  /**
   * 实体高度
   */
  entityHeight: (arg0: ValueEntity) => number;
  /**
   * Create a recipe with the first ingredients as input, and the second ingredients as output
   */
  ingredientsWithInputOutput: (arg0: ValueIngredients, arg1: ValueIngredients) => ValueRecipe;
  /**
   * 获取指定变量的唯一名称
   */
  uniquely_namedUniqueName: (arg0: any) => string;
  /**
   * Get the value of the given data component key.
   */
  fluidstackDataValue: (arg0: ValueFluidstack, arg1: string) => Record<string, any>;
  /**
   * 如果方块可以被使用剪刀
   */
  blockIsShearable: (arg0: ValueBlock) => boolean;
  doubleDoubleToInteger: (arg0: number) => number;
  /**
   * 物品是否已经附魔
   */
  itemstackIsEnchanted: (arg0: ValueItemstack) => boolean;
  /**
   * 指定植物方块的成熟度
   */
  blockPlantAge: (arg0: ValueBlock) => number;
  /**
   * 判断指定的子字符串是否是指定字符串的结尾.
   */
  stringEndsWith: (arg0: string, arg1: string) => boolean;
  /**
   * 可以存储在此项目中的最大FE数量
   */
  itemstackFeCapacity: (arg0: ValueItemstack) => number;
  /**
   * 如果物品具有存储能力
   */
  itemstackHasInventory: (arg0: ValueItemstack) => boolean;
  numberAdd: (arg0: number, arg1: number) => number;
  /**
   * 用两个输入翻转运算符的输入参数。
   */
  operatorFlip: (arg0: Function) => Function;
  /**
   * Get a copy of the given recipe with the given ingredients as input
   */
  recipeWithInput: (arg0: ValueRecipe, arg1: ValueIngredients) => ValueRecipe;
  numberIncrement: (arg0: number) => number;
  /**
   * 该物品的挖掘强度与指定的方块的强度比较
   */
  itemstackStrength: (arg0: ValueItemstack, arg1: ValueBlock) => number;
  /**
   * Round down to the nearest Integer
   */
  numberFloor: (arg0: number) => number;
  integerBinaryOr: (arg0: number, arg1: number) => number;
  /**
   * The list of items
   */
  ingredientsItems: (arg0: ValueIngredients) => any[];
  /**
   * The union of the given NBT compound tags. Nested tags will be joined recursively.
   */
  nbtUnion: (arg0: Record<string, any>, arg1: Record<string, any>) => Record<string, any>;
  /**
   * 删除列表中所有的重复元素。
   */
  listUnique: (arg0: any[]) => any[];
  integerBinaryAnd: (arg0: number, arg1: number) => number;
  /**
   * The item the given entity is currently holding in its off-hand.
   */
  entityHeldItemOffHand: (arg0: ValueEntity) => ValueItemstack;
  /**
   * Create a joined string with the given string delimiter and the given list of strings.
   */
  stringJoin: (arg0: string, arg1: any[]) => string;
  numberGreaterThan: (arg0: number, arg1: number) => boolean;
  /**
   * 安全的获取列表指定位置的元素,如果元素不可用,则返回默认值
   */
  listGetOrDefault: (arg0: any[], arg1: number, arg2: any) => any;
  /**
   * Get the block properties as NBT compound tag.
   */
  blockProperties: (arg0: ValueBlock) => Record<string, any>;
  /**
   * 指定的值是否非空
   */
  anyIsNotNull: (arg0: any) => boolean;
  /**
   * Get a copy of the given NBT compound tag with the given Long entry
   */
  nbtWithLong: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  /**
   * 物品的稀有度
   */
  itemstackRarity: (arg0: ValueItemstack) => string;
  /**
   * 实体是否在进食
   */
  entityIsEating: (arg0: ValueEntity) => boolean;
  /**
   * Apply for a given operator without arguments.
   */
  operatorApply0: (arg0: Function) => any;
  /**
   * Get the Integer value of the given NBT Byte tag
   */
  nbtAsByte: (arg0: Record<string, any>) => number;
  /**
   * Get the NBT List value of the given NBT List tag
   */
  nbtAsTagList: (arg0: Record<string, any>) => any[];
  booleanNor: (arg0: boolean, arg1: boolean) => boolean;
  /**
   * Apply for a given operator the given three values.
   */
  operatorApply3: (arg0: Function, arg1: any, arg2: any, arg3: any) => any;
  booleanNot: (arg0: boolean) => boolean;
  doubleSqrt: (arg0: number) => number;
  /**
   * 使用指定的运算符计算两个指定的值
   */
  operatorApply2: (arg0: Function, arg1: any, arg2: any) => any;
  /**
   * 指定物品是否可用作燃料
   */
  itemstackCanBurn: (arg0: ValueItemstack) => boolean;
  /**
   * 右移补一
   */
  integerRightShift: (arg0: number, arg1: number) => number;
  /**
   * The Integer Array in the given NBT compound tag with the given key as Integer List
   */
  nbtGetListInt: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * 指定物品展示框的内容
   */
  entityItemFrameContents: (arg0: ValueEntity) => ValueItemstack;
  /**
   * 获取对应下标的列表元素
   */
  listGet: (arg0: any[], arg1: number) => any;
  /**
   * If the first NBT compound tag is a subset of, or equal to the second NBT compound tag. This will recursively check nested tags.
   */
  nbtIsSubset: (arg0: Record<string, any>, arg1: Record<string, any>) => boolean;
  /**
   * The bucket empty sound for the fluid
   */
  fluidstackBucketEmptySound: (arg0: ValueFluidstack) => string;
  /**
   * Create an NBT Byte Array tag from the given Integer List value
   */
  byteListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * 判断指定的正则表达式是否匹配指定的字符串.
   */
  stringMatchesRegex: (arg0: string, arg1: string) => boolean;
  /**
   * 取两个数值中的最大值
   */
  numberMax: (arg0: number, arg1: number) => number;
  /**
   * Create an NBT Float tag from the given Double value
   */
  floatAsNbt: (arg0: number) => Record<string, any>;
  /**
   * 此列表是否非空
   */
  listIsNotEmpty: (arg0: any[]) => boolean;
  /**
   * 流体对应的Mod
   */
  fluidstackMod: (arg0: ValueFluidstack) => string;
  stringParseAsInteger: (arg0: string) => number;
  /**
   * If the entity is crouching
   */
  entityIsCrouching: (arg0: ValueEntity) => boolean;
  /**
   * The Long value in the given NBT compound tag with the given key
   */
  nbtGetLong: (arg0: Record<string, any>, arg1: string) => number;
  /**
   * Get a copy of the given NBT compound tag with the given String entry
   */
  nbtWithString: (arg0: Record<string, any>, arg1: string, arg2: string) => Record<string, any>;
  /**
   * 如果指定实体已经进入求爱模式并准备好繁殖.
   */
  entityIsInLove: (arg0: ValueEntity) => boolean;
  /**
   * The value of any type in the given NBT compound tag with the given key
   */
  nbtGetTag: (arg0: Record<string, any>, arg1: string) => Record<string, any>;
  /**
   * The String value in the given NBT compound tag with the given key
   */
  nbtGetString: (arg0: Record<string, any>, arg1: string) => string;
  /**
   * 第一次输入的值的副本.
   */
  anyConstant: (arg0: any, arg1: any) => any;
  /**
   * The filled bucket for the fluid
   */
  fluidstackBucket: (arg0: ValueFluidstack) => ValueItemstack;
  /**
   * 使用起始数据和应用于上一个元素的运算符来构建列表以获取下一个元素。
   */
  anyLazyBuilt: (arg0: any, arg1: Function) => any[];
  /**
   * Get the given block applied with the given properties.
   */
  blockWithProperties: (arg0: ValueBlock, arg1: Record<string, any>) => ValueBlock;
  numberMultiply: (arg0: number, arg1: number) => number;
  /**
   * 右移补零
   */
  integerUnsignedRightShift: (arg0: number, arg1: number) => number;
  /**
   * Get the operator that has the given unique name.
   */
  stringOperatorByName: (arg0: string) => Function;
  /**
   * The Integer value in the given NBT compound tag with the given key
   */
  nbtGetInteger: (arg0: Record<string, any>, arg1: string) => number;
  /**
   * The input ingredients of the given recipe
   */
  recipeInput: (arg0: ValueRecipe) => ValueIngredients;
  /**
   * Get the Integer value of the given NBT Short tag
   */
  nbtAsShort: (arg0: Record<string, any>) => number;
  /**
   * Get a copy of the given ingredients with the given energy at the given ingredient position
   */
  ingredientsWithEnergy: (arg0: ValueIngredients, arg1: number, arg2: number) => ValueIngredients;
  doublePow: (arg0: number, arg1: number) => number;
  /**
   * Get all possible block properties as an NBT compound tag with list values.
   */
  blockPossibleProperties: (arg0: ValueBlock) => Record<string, any>;
  /**
   * The Long Array in the given NBT compound tag with the given key as Long List
   */
  nbtGetListLong: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * The Boolean value in the given NBT compound tag with the given key
   */
  nbtGetBoolean: (arg0: Record<string, any>, arg1: string) => boolean;
  /**
   * 实体正在看的实体
   */
  entityTargetEntity: (arg0: ValueEntity) => ValueEntity;
  /**
   * 如果第一个值为真,取第二个值,否则取第三个值\n第二个和第三个的类型必须相同
   */
  booleanChoice: (arg0: boolean, arg1: any, arg2: any) => any;
  /**
   * Create an NBT Short tag from the given Integer value
   */
  shortAsNbt: (arg0: number) => Record<string, any>;
  /**
   * 指定方块被放置的声音
   */
  blockPlaceSound: (arg0: ValueBlock) => string;
  /**
   * 获取指定流体的NBT标签
   */
  fluidstackNbt: (arg0: ValueFluidstack) => Record<string, any>;
  /**
   * 物品能否堆叠两个及以上
   */
  itemstackIsStackable: (arg0: ValueItemstack) => boolean;
  /**
   * 指定实体受伤的声音
   */
  entityHurtSound: (arg0: ValueEntity) => string;
  /**
   * Get the tooltip of the given item as a list of strings.
   */
  itemstackTooltip: (arg0: ValueItemstack) => any[];
  /**
   * 流体密度
   */
  fluidstackDensity: (arg0: ValueFluidstack) => number;
  /**
   * The fluid vaporize sound for the fluid
   */
  fluidstackFluidVaporizeSound: (arg0: ValueFluidstack) => string;
  /**
   * Get all data component keys of the fluid stack.
   */
  fluidstackDataKeys: (arg0: ValueFluidstack) => any[];
  /**
   * 判断指定的子字符串是否是指定的字符串的开头.
   */
  stringStartsWith: (arg0: string, arg1: string) => boolean;
  /**
   * 如果指定实体是幼体.
   */
  entityIsChild: (arg0: ValueEntity) => boolean;
  /**
   * Apply for a given operator the given list of values.
   */
  operatorApply_n: (arg0: Function, arg1: any[]) => any;
  /**
   * 指定方块对应的Mod名称
   */
  blockMod: (arg0: ValueBlock) => string;
  /**
   * 判断指定的子字符串是否包含在指定的字符串中.
   */
  stringContains: (arg0: string, arg1: string) => boolean;
  /**
   * Get the Double value of the given NBT Double tag
   */
  nbtAsDouble: (arg0: Record<string, any>) => number;
  /**
   * 获取指定的正则表达式在指定字符串中第一次匹配到的位置.
   */
  stringIndexOfRegex: (arg0: string, arg1: string) => number;
  /**
   * Get a copy of the given NBT compound tag with the given Integer List as an NBT Byte Array entry
   */
  nbtWithByteList: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * 实体正在看的方块
   */
  entityTargetBlock: (arg0: ValueEntity) => ValueBlock;
  /**
   * Get the Double value of the given NBT Float tag
   */
  nbtAsFloat: (arg0: Record<string, any>) => number;
  /**
   * Tests whether two values are equal. The types of both must be the same.
   */
  anyEquals: (arg0: any, arg1: any) => boolean;
  /**
   * If the given entity can be bred using the given item.
   */
  entityCanBreedWith: (arg0: ValueEntity, arg1: ValueItemstack) => boolean;
  /**
   * The Tag names (strings) of the given fluid
   */
  fluidstackTags: (arg0: ValueFluidstack) => any[];
  /**
   * Create an NBT Long Array tag from the given Long List value
   */
  longListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * Get the Long List value of the given NBT Long Array tag
   */
  nbtAsLongList: (arg0: Record<string, any>) => any[];
  /**
   * Throw a custom error
   */
  stringStringError: (arg0: string) => string;
  /**
   * Create an NBT Long tag from the given Long value
   */
  longAsNbt: (arg0: number) => Record<string, any>;
  /**
   * 获取指定名称对应的物品类型,使用"空格+数值"来指定元数据.
   */
  stringItemByName: (arg0: string) => ValueItemstack;
  /**
   * 基于指定的比较条件删除列表中所有的重复元素。
   */
  listUniquePredicate: (arg0: any[], arg1: Function) => any[];
  /**
   * 用指定的分隔符(文本)拆分字符串,并返回拆分后的列表.
   */
  stringSplitOn: (arg0: string, arg1: string) => any[];
  /**
   * 判断指定的正则表达式是否能在指定字符串中找到匹配.
   */
  stringContainsRegex: (arg0: string, arg1: string) => boolean;
  /**
   * Get all data component keys of the item stack.
   */
  itemstackDataKeys: (arg0: ValueItemstack) => any[];
  /**
   * Get the String value of the given NBT String tag
   */
  nbtAsString: (arg0: Record<string, any>) => string;
  stringParseAsBoolean: (arg0: string) => boolean;
  /**
   * 从指定的字符串中返回从指定的起始索引(包含文字)到指定的末尾索引(排除)之间的字符串片段.
   */
  integerSubstring: (arg0: number, arg1: number, arg2: string) => string;
  /**
   * Get a copy of the given NBT compound tag with the given Double entry
   */
  nbtWithDouble: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  /**
   * Round up to the nearest Integer
   */
  numberCeil: (arg0: number) => number;
  /**
   * Add the given data component key and value to the given item stack.
   */
  fluidstackWithData: (arg0: ValueFluidstack, arg1: string, arg2: Record<string, any>) => Record<string, any>;
  /**
   * 流体总量(mb)
   */
  fluidstackAmount: (arg0: ValueFluidstack) => number;
  /**
   * Concatenate the two lists to each other.
   */
  listConcat: (arg0: any[], arg1: any[]) => any[];
  /**
   * Get a copy of the given NBT compound tag with the given NBT List entry
   */
  nbtWithTagList: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * Apply the given NBT Path expression on the given NBT value, and return the first match
   */
  stringNbtPathMatchFirst: (arg0: string, arg1: Record<string, any>) => Record<string, any>;
  /**
   * The Tag values (fluids) of the given fluid tag name
   */
  stringFluidsByTag: (arg0: string) => any[];
  /**
   * 获取指定实体的NBT标签.
   */
  entityNbt: (arg0: ValueEntity) => Record<string, any>;
  /**
   * If the item stack has data components.
   */
  itemstackHasNbt: (arg0: ValueItemstack) => boolean;
  /**
   * 在指定的列表中附加指定的项目。
   */
  listAppend: (arg0: any[], arg1: any) => any[];
  /**
   * Add the given data component key and value to the given item stack.
   */
  itemstackWithData: (arg0: ValueItemstack, arg1: string, arg2: Record<string, any>) => Record<string, any>;
  /**
   * Create an NBT Byte tag from the given Integer value
   */
  byteAsNbt: (arg0: number) => Record<string, any>;
  numberDivide: (arg0: number, arg1: number) => number;
  /**
   * If the raw items of the given stacks are equal, ignoring data components but including damage values.
   */
  itemstackIsEqualNonNbt: (arg0: ValueItemstack, arg1: ValueItemstack) => boolean;
  /**
   * The list of energy elements
   */
  ingredientsEnergies: (arg0: ValueIngredients) => any[];
  /**
   * Get a copy of the given ingredients with the given list of items at the given ingredient position
   */
  ingredientsWithItems: (arg0: ValueIngredients, arg1: any[]) => ValueIngredients;
  anyGreaterThanOrEquals: (arg0: any, arg1: any) => boolean;
  /**
   * 指定流体容器的容量(mB)
   */
  itemstackFluidCapacity: (arg0: ValueItemstack) => number;
  /**
   * 获取指定物品在列表中的数量
   */
  listItemListCount: (arg0: any[], arg1: ValueItemstack) => number;
  /**
   * 当前物品的堆叠上限
   */
  itemstackMaxSize: (arg0: ValueItemstack) => number;
  /**
   * The intersection of the given NBT compound tags. Nested tags will be intersected recursively.
   */
  nbtIntersection: (arg0: Record<string, any>, arg1: Record<string, any>) => Record<string, any>;
  /**
   * 流体稀有度
   */
  fluidstackRarity: (arg0: ValueFluidstack) => string;
  /**
   * 在指定的字符串中找到所有指定的搜索词的匹配,并用指定的字符串替换它们.
   */
  stringReplace: (arg0: string, arg1: string, arg2: string) => string;
  /**
   * Get a copy of the given NBT compound tag with the given Integer as a short entry
   */
  nbtWithShort: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  longLongToDouble: (arg0: number) => number;
  /**
   * 在指定的字符串中找到所有指定的正则表达式的匹配,并用指定的字符串替换它们.
   */
  stringReplaceRegex: (arg0: string, arg1: string, arg2: string) => string;
  /**
   * 获取指定的子字符串在指定字符串中第一次出现的位置.
   */
  stringIndexOf: (arg0: string, arg1: string) => number;
  /**
   * 指定方块代表的物品
   */
  blockItemStack: (arg0: ValueBlock) => ValueItemstack;
  /**
   * Get the Integer List value of the given NBT Integer Array tag
   */
  nbtAsIntList: (arg0: Record<string, any>) => any[];
  /**
   * 获取指定名称对应的方块类型,使用"空格+数值"来指定元数据.
   */
  stringBlockByName: (arg0: string) => ValueBlock;
  /**
   * 指定物品对应的方块
   */
  itemstackBlock: (arg0: ValueItemstack) => ValueBlock;
  /**
   * Apply the given NBT Path expression on the given NBT value, and return all matches as a list
   */
  stringNbtPathMatchAll: (arg0: string, arg1: Record<string, any>) => any[];
  /**
   * The light level emitted by the fluid
   */
  fluidstackLightLevel: (arg0: ValueFluidstack) => number;
  /**
   * 获取指定列表的第一个元素。
   */
  listHead: (arg0: any[]) => any;
  /**
   * The Tag names (strings) of the given item
   */
  itemstackTags: (arg0: ValueItemstack) => any[];
  /**
   * Create an NBT Double tag from the given Double value
   */
  doubleAsNbt: (arg0: number) => Record<string, any>;
  /**
   * 实体是否为掉落物
   */
  entityIsItem: (arg0: ValueEntity) => boolean;
  /**
   * The Byte Array in the given NBT compound tag with the given key as Integer List
   */
  nbtGetListByte: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * 指定玩家是否开着GUI
   */
  entityHasGuiOpen: (arg0: ValueEntity) => boolean;
  /**
   * Check if two lists are equal according to multiset semantics.
   */
  listEquals_multiset: (arg0: any[], arg1: any[]) => boolean;
  /**
   * 获取物品处理容器的库存
   */
  itemstackInventory: (arg0: ValueItemstack) => any[];
  /**
   * 结合两个谓词。
   */
  operatorConjunction: (arg0: Function, arg1: Function) => Function;
  /**
   * 获取物品处理容器的存储容量
   */
  itemstackInventorySize: (arg0: ValueItemstack) => number;
  /**
   * 连接两个字符串
   */
  stringConcat: (arg0: string, arg1: string) => string;
  /**
   * 如果列表的至少一个元素对于指定的谓词返回true。
   */
  listContainsPredicate: (arg0: any[], arg1: Function) => boolean;
  /**
   * 物品损害值上限
   */
  itemstackMaxDamage: (arg0: ValueItemstack) => number;
  /**
   * 实体中存储的能量.
   */
  entityEnergy: (arg0: ValueEntity) => number;
  /**
   * 所给实体对应的mod
   */
  entityMod: (arg0: ValueEntity) => string;
  /**
   * Get a copy of the given ingredients with the given list of energy elements at the given ingredient position
   */
  ingredientsWithEnergies: (arg0: ValueIngredients, arg1: any[]) => ValueIngredients;
  /**
   * Search for all matches of the given regular expression and return the group at the given index, in the given string.
   */
  stringRegexScan: (arg0: string, arg1: number, arg2: string) => any[];
  integerIntegerToDouble: (arg0: number) => number;
  /**
   * 指定实体的年龄.
   */
  entityAge: (arg0: ValueEntity) => number;
  /**
   * 将指定列表的子集从指定索引(包括)移到指定索引(不包括)。
   */
  listSlice: (arg0: any[], arg1: number, arg2: number) => any[];
  /**
   * 玩家携带的物品列表
   */
  entityInventory: (arg0: ValueEntity) => any[];
  /**
   * Search for the given regular expression and return in that match the group at the given index, in the given string.
   */
  stringRegexGroup: (arg0: string, arg1: number, arg2: string) => string;
  /**
   * The Double value in the given NBT compound tag with the given key
   */
  nbtGetDouble: (arg0: Record<string, any>, arg1: string) => number;
  integerXor: (arg0: number, arg1: number) => number;
  /**
   * The Tag values (blocks) of the given block tag name
   */
  stringBlocksByTag: (arg0: string) => any[];
  /**
   * 设置指定物品的堆叠大小
   */
  itemstackWithSize: (arg0: ValueItemstack, arg1: number) => ValueItemstack;
  /**
   * The number of entries inside the given NBT compound tag
   */
  nbtSize: (arg0: Record<string, any>) => number;
  /**
   * 如果指定实体可以被使用剪刀
   */
  entityIsShearable: (arg0: ValueEntity) => boolean;
  /**
   * 修复此物品的花费
   */
  itemstackRepairCost: (arg0: ValueItemstack) => number;
  /**
   * 在指定方块上行走的声音
   */
  blockStepSound: (arg0: ValueBlock) => string;
  /**
   * 指定列表的长度
   */
  listLength: (arg0: any[]) => number;
  /**
   * 存储在此项目中的FE量
   */
  itemstackFeStored: (arg0: ValueItemstack) => number;
  /**
   * 物品可以损坏
   */
  itemstackIsDamageable: (arg0: ValueItemstack) => boolean;
  /**
   * 物品能否附魔
   */
  itemstackIsEnchantable: (arg0: ValueItemstack) => boolean;
  /**
   * 用指定的断言过滤元素列表
   */
  operatorFilter: (arg0: Function, arg1: any[]) => any[];
  /**
   * Apply the given operator on all elements of a list to reduce the list to one value. reduce1(op, list) is equivalent to reduce(op, tail(list), head(list)).
   */
  operatorReduce1: (arg0: Function, arg1: any[]) => any;
  /**
   * Test if the given NBT Path expression matches with the given NBT value
   */
  stringNbtPathTest: (arg0: string, arg1: Record<string, any>) => boolean;
  /**
   * The list of fluids
   */
  ingredientsFluids: (arg0: ValueIngredients) => any[];
  /**
   * Get the Boolean value of the given NBT Byte tag
   */
  nbtAsBoolean: (arg0: Record<string, any>) => boolean;
  /**
   * 如果指定实体已经准备好繁殖.
   */
  entityCanBreed: (arg0: ValueEntity) => boolean;
  /**
   * 流体对应方块
   */
  fluidstackBlock: (arg0: ValueFluidstack) => ValueBlock;
  /**
   * The list of keys inside the given NBT compound tag
   */
  nbtKeys: (arg0: Record<string, any>) => any[];
  numberDecrement: (arg0: number) => number;
  booleanAnd: (arg0: boolean, arg1: boolean) => boolean;
}

export interface ValueItemstack {
  id_item: Record<string, any>;

  /**
   * If the raw items of the given stacks are equal, ignoring data components but including damage values.
   */
  isEqualNonNbt: (arg0: ValueItemstack) => boolean;
  /**
   * If the raw items of the given items are equal, ignoring NBT and damage values.
   */
  isEqualRaw: (arg0: ValueItemstack) => boolean;
  /**
   * 当前物品的损害值
   */
  damage: () => number;
  /**
   * 获取指定物品的NBT标签
   */
  nbt: () => Record<string, any>;
  /**
   * If the item stack has data components.
   */
  hasNbt: () => boolean;
  /**
   * 指定物品对应的Mod名称
   */
  mod: () => string;
  /**
   * 指定物品是否可用作燃料
   */
  canBurn: () => boolean;
  /**
   * 该物品的挖掘强度与指定的方块的强度比较
   */
  strength: (arg0: ValueBlock) => number;
  /**
   * 存储在此项目中的FE量
   */
  feStored: () => number;
  /**
   * 物品损害值上限
   */
  maxDamage: () => number;
  /**
   * Get the tooltip of the given item as a list of strings.
   */
  tooltip: () => any[];
  /**
   * 当前物品的堆叠上限
   */
  maxSize: () => number;
  /**
   * 设置指定物品的堆叠大小
   */
  withSize: (arg0: number) => ValueItemstack;
  /**
   * 可以存储在此项目中的最大FE数量
   */
  feCapacity: () => number;
  /**
   * 获取物品处理容器的库存
   */
  inventory: () => any[];
  /**
   * 比较两个指定物品是否相同,包括NBT
   */
  isNbtEqual: (arg0: ValueItemstack) => boolean;
  /**
   * 指定物品的燃烧时间(Tick)
   */
  burnTime: () => number;
  /**
   * 物品能否堆叠两个及以上
   */
  isStackable: () => boolean;
  /**
   * 物品能否附魔
   */
  isEnchantable: () => boolean;
  /**
   * 指定物品对应的方块
   */
  block: () => ValueBlock;
  /**
   * Get all data component keys of the item stack.
   */
  dataKeys: () => any[];
  /**
   * 该物品能否采集指定方块
   */
  canHarvest: (arg0: ValueBlock) => boolean;
  /**
   * 物品是否已经附魔
   */
  isEnchanted: () => boolean;
  /**
   * Get the value of the given data component key.
   */
  dataValue: (arg0: string) => Record<string, any>;
  /**
   * 获取物品处理容器的存储容量
   */
  inventorySize: () => number;
  /**
   * The Tag names (strings) of the given item
   */
  tags: () => any[];
  /**
   * 如果物品具有存储能力
   */
  hasInventory: () => boolean;
  /**
   * 指定流体容器的容量(mB)
   */
  fluidCapacity: () => number;
  /**
   * 当前物品栈物品数量
   */
  size: () => number;
  /**
   * 物品可以损坏
   */
  isDamageable: () => boolean;
  /**
   * Add the given data component key and value to the given item stack.
   */
  withData: (arg0: string, arg1: Record<string, any>) => Record<string, any>;
  /**
   * 指定物品中对应的流体
   */
  fluidStack: () => ValueFluidstack;
  /**
   * 如果指定的项目可以保存FE
   */
  isFeContainer: () => boolean;
  /**
   * 指定物品中有流体
   */
  isFluidStack: () => boolean;
  /**
   * 修复此物品的花费
   */
  repairCost: () => number;
  /**
   * 物品的稀有度
   */
  rarity: () => string;
}

export interface ValueBlock {
  id_block: Record<string, any>;

  /**
   * 指定方块代表的物品
   */
  itemStack: () => ValueItemstack;
  /**
   * 指定方块被放置的声音
   */
  placeSound: () => string;
  /**
   * 指定方块对应的Mod名称
   */
  mod: () => string;
  /**
   * 在指定方块上行走的声音
   */
  stepSound: () => string;
  /**
   * Get the given block applied with the given properties.
   */
  withProperties: (arg0: Record<string, any>) => ValueBlock;
  /**
   * 指定的方块是否不透明
   */
  isOpaque: () => boolean;
  /**
   * 如果方块可以被使用剪刀
   */
  isShearable: () => boolean;
  /**
   * 指定方块被破坏的声音
   */
  breakSound: () => string;
  /**
   * Get all possible block properties as an NBT compound tag with list values.
   */
  possibleProperties: () => Record<string, any>;
  /**
   * 指定植物方块的成熟度
   */
  plantAge: () => number;
  /**
   * Get the block properties as NBT compound tag.
   */
  properties: () => Record<string, any>;
  /**
   * The Tag names (strings) of the given block
   */
  tags: () => any[];
}

export interface ValueIngredients {
  id_ingredients: Record<string, any>;

  /**
   * Get a copy of the given ingredients with the given item at the given ingredient position
   */
  withItem: (arg0: number, arg1: ValueItemstack) => ValueIngredients;
  /**
   * The list of energy elements
   */
  energies: () => any[];
  /**
   * Get a copy of the given ingredients with the given fluid at the given ingredient position
   */
  withFluid: (arg0: number, arg1: ValueFluidstack) => ValueIngredients;
  /**
   * Get a copy of the given ingredients with the given list of energy elements at the given ingredient position
   */
  withEnergies: (arg0: any[]) => ValueIngredients;
  /**
   * Get a copy of the given ingredients with the given list of items at the given ingredient position
   */
  withItems: (arg0: any[]) => ValueIngredients;
  /**
   * The list of items
   */
  items: () => any[];
  /**
   * Create a recipe with the first ingredients as input, and the second ingredients as output
   */
  withInputOutput: (arg0: ValueIngredients) => ValueRecipe;
  /**
   * Get a copy of the given ingredients with the given list of fluids at the given ingredient position
   */
  withFluids: (arg0: any[]) => ValueIngredients;
  /**
   * The list of fluids
   */
  fluids: () => any[];
  /**
   * Get a copy of the given ingredients with the given energy at the given ingredient position
   */
  withEnergy: (arg0: number, arg1: number) => ValueIngredients;
}

export interface ValueRecipe {
  id_recipe: Record<string, any>;

  /**
   * The output ingredients of the given recipe
   */
  output: () => ValueIngredients;
  /**
   * The input ingredients of the given recipe
   */
  input: () => ValueIngredients;
  /**
   * Get a copy of the given recipe with the given ingredients as input
   */
  withInput: (arg0: ValueIngredients) => ValueRecipe;
  /**
   * Get a copy of the given recipe with the given ingredients as output
   */
  withOutput: (arg0: ValueIngredients) => ValueRecipe;
}

export interface ValueFluidstack {
  id_fluid: Record<string, any>;

  /**
   * Get all data component keys of the fluid stack.
   */
  dataKeys: () => any[];
  /**
   * 获取指定流体的NBT标签
   */
  nbt: () => Record<string, any>;
  /**
   * 流体总量(mb)
   */
  amount: () => number;
  /**
   * The fluid vaporize sound for the fluid
   */
  fluidVaporizeSound: () => string;
  /**
   * 流体对应的Mod
   */
  mod: () => string;
  /**
   * 流体密度
   */
  density: () => number;
  /**
   * If the fluid is lighter than air
   */
  isLighterThanAir: () => boolean;
  /**
   * Get the value of the given data component key.
   */
  dataValue: (arg0: string) => Record<string, any>;
  /**
   * The bucket empty sound for the fluid
   */
  bucketEmptySound: () => string;
  /**
   * The bucket fill sound for the fluid
   */
  bucketFillSound: () => string;
  /**
   * The Tag names (strings) of the given fluid
   */
  tags: () => any[];
  /**
   * The filled bucket for the fluid
   */
  bucket: () => ValueItemstack;
  /**
   * The light level emitted by the fluid
   */
  lightLevel: () => number;
  /**
   * 液体流动性
   */
  viscosity: () => number;
  /**
   * Add the given data component key and value to the given item stack.
   */
  withData: (arg0: string, arg1: Record<string, any>) => Record<string, any>;
  /**
   * The fluid temperature
   */
  temperature: () => number;
  /**
   * 流体对应方块
   */
  block: () => ValueBlock;
  /**
   * 液体是否相同
   */
  isRawEqual: (arg0: ValueFluidstack) => boolean;
  /**
   * Copy the given fluid with the given amount
   */
  withAmount: (arg0: number) => ValueFluidstack;
  /**
   * 流体稀有度
   */
  rarity: () => string;
}

export interface ValueEntity {
  id_entity: Record<string, any>;

  /**
   * 实体是否为玩家
   */
  isPlayer: () => boolean;
  /**
   * 获取指定实体的NBT标签.
   */
  nbt: () => Record<string, any>;
  /**
   * In the context of the given Player Entity, get the tooltip of the given item as a list of strings.
   */
  entityItemTooltip: (arg0: ValueItemstack) => any[];
  /**
   * 所给实体对应的mod
   */
  mod: () => string;
  /**
   * 实体正在看的实体
   */
  targetEntity: () => ValueEntity;
  /**
   * 实体是否为矿车
   */
  isMinecart: () => boolean;
  /**
   * If the entity is crouching
   */
  isCrouching: () => boolean;
  /**
   * 实体是否在进食
   */
  isEating: () => boolean;
  /**
   * If the given entity can be bred using the given item.
   */
  canBreedWith: (arg0: ValueItemstack) => boolean;
  /**
   * 实体是否为怪物
   */
  isMob: () => boolean;
  /**
   * 玩家携带的物品列表
   */
  inventory: () => any[];
  /**
   * 实体种类的名称.
   */
  type: () => string;
  /**
   * 如果指定实体已经进入求爱模式并准备好繁殖.
   */
  isInLove: () => boolean;
  /**
   * 实体可存储能量的上限.
   */
  energyCapacity: () => number;
  /**
   * 实体是否在燃烧
   */
  entityIsBurning: () => boolean;
  /**
   * 实体正手持的物品
   */
  heldItem: () => ValueItemstack;
  /**
   * 如果指定实体已经准备好繁殖.
   */
  canBreed: () => boolean;
  /**
   * 如果指定实体是幼体.
   */
  isChild: () => boolean;
  /**
   * 实体高度
   */
  height: () => number;
  /**
   * 实体正在看的方块
   */
  targetBlock: () => ValueBlock;
  /**
   * 实体中包含的流体.
   */
  fluids: () => any[];
  /**
   * 实体中存储的能量.
   */
  energy: () => number;
  /**
   * 实体是否在水中
   */
  isWet: () => boolean;
  /**
   * 掉落物对应物品
   */
  item: () => ValueItemstack;
  /**
   * 实体生命值
   */
  health: () => number;
  /**
   * 指定实体死亡的声音
   */
  deathSound: () => string;
  /**
   * 指定物品展示框内物品的旋转情况
   */
  itemFrameRotation: () => number;
  /**
   * 骑在实体上的实体
   */
  mounted: () => any[];
  /**
   * The item the given entity is currently holding in its off-hand.
   */
  heldItemOffHand: () => ValueItemstack;
  /**
   * 指定玩家是否开着GUI
   */
  hasGuiOpen: () => boolean;
  /**
   * 实体是否为动物
   */
  isAnimal: () => boolean;
  /**
   * 指定实体受伤的声音
   */
  hurtSound: () => string;
  /**
   * 如果指定实体可以被使用剪刀
   */
  isShearable: () => boolean;
  /**
   * 实体宽度
   */
  width: () => number;
  /**
   * 实体作为盔甲携带的物品列表
   */
  armorInventory: () => any[];
  /**
   * 实体是否为掉落物
   */
  isItem: () => boolean;
  /**
   * 实体中包含的物品.
   */
  items: () => any[];
  /**
   * 指定物品展示框的内容
   */
  itemFrameContents: () => ValueItemstack;
  /**
   * 指定实体的年龄.
   */
  age: () => number;
}

